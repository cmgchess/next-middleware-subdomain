import { getValidSubdomain } from "@/app/utils/subdomain";
import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;
export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const url = request.nextUrl.clone();
  if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes("_next")) return;
  const host = request.headers.get("host");
  const subdomain = getValidSubdomain(host);
  if (!subdomain) return NextResponse.rewrite(url);
  requestHeaders.set("x-subdomain", subdomain);
//   console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
//   console.log(`>>> Subdomain: ${subdomain}`);
//   url.pathname = `/${subdomain}${url.pathname}`;
  return NextResponse.rewrite(url, {
    request: {
      headers: requestHeaders,
    },
  });
}
