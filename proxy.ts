import { NextResponse, type NextRequest } from "next/server";
import { resolveOldUrl } from "@/lib/redirects";

// The old site lived on www.gsmh.ca (the bare domain had no working certificate), so www stays the main address.
const CANONICAL_HOST = "www.gsmh.ca";

/**
 * Runs before every page request.
 * 1. gsmh.ca -> www.gsmh.ca (one 301, path kept or translated).
 * 2. / -> /fr (French is the default language).
 * 3. Old-site URLs get one 301; anything else with a trailing slash is normalized.
 * 4. Preview hosts (Replit, Vercel) are kept out of Google so they never compete with the real domain.
 */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const host = (req.headers.get("x-forwarded-host") ?? req.headers.get("host") ?? "").split(":")[0].toLowerCase();
  const isApex = host === "gsmh.ca";
  const origin = isApex ? `https://${CANONICAL_HOST}` : req.nextUrl.origin;
  const redirect = (target: string) => NextResponse.redirect(new URL(target, origin), 301);

  // A language choice, not a move: 307 so it can change later without browsers caching it forever
  if (pathname === "/") return NextResponse.redirect(new URL("/fr", origin), 307);

  const target = resolveOldUrl(pathname);
  if (target) return redirect(target);

  if (pathname.length > 1 && pathname.endsWith("/")) {
    const url = new URL(req.url);
    url.pathname = pathname.replace(/\/+$/, "");
    if (isApex) url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, isApex ? 301 : 308);
  }

  if (isApex) return redirect(pathname + req.nextUrl.search);

  const res = NextResponse.next();
  if (host && host !== CANONICAL_HOST && host !== "localhost" && host !== "127.0.0.1") {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return res;
}

export const config = { matcher: ["/((?!_next/|api/|images/|logo/|icon\\.png|apple-touch-icon\\.png|favicon\\.ico|opengraph-image|sitemap\\.xml|robots\\.txt|llms\\.txt).*)"] };
