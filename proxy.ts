import { NextResponse, type NextRequest } from "next/server";
import { resolveOldUrl } from "@/lib/redirects";

/** Old-site URLs get one 301; anything else with a trailing slash is normalized. */
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const target = resolveOldUrl(pathname);
  if (target) return NextResponse.redirect(new URL(target, req.nextUrl.origin), 301);
  if (pathname.length > 1 && pathname.endsWith("/")) { const url = new URL(req.url); url.pathname = pathname.replace(/\/+$/, ""); return NextResponse.redirect(url, 308); }
  return NextResponse.next();
}
export const config = { matcher: ["/((?!_next/|api/|images/|logo/|design|test|icon\\.png|sitemap\\.xml|robots\\.txt|llms\\.txt).*)"] };
