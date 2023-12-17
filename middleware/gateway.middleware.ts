import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const gatewayEndpoints = ["/api/v1"];

export default async function GatewayMiddleware(
  req: NextRequest
): Promise<NextResponse> {
  try {
    const pathname = req.nextUrl.pathname;
    if (!gatewayEndpoints.some((path) => pathname.startsWith(path))) {
      // if the pathname doesn't correspond to none of defined major.
      return NextResponse.next();
    } else {
      // fetching auth cookie
      const auth_cookie = req.cookies.get("e-acs");
      // if the cookie is not available, need authentication to set the cookie
      if (!auth_cookie) {
        return NextResponse.json({}, { status: 401 });
      } else {
        return NextResponse.json({}, { status: 200 });
      }
    }
  } catch (error) {
    // TODO: logging the error in the errors journal
    return NextResponse.next();
  }
}
