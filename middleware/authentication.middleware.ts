import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const loggedInAsOrganization = ["/organization"];
const loggedOut = ["/login", "/register", "/password"];

export default async function AuthenticationMiddleware(
  req: NextRequest
): Promise<NextResponse> {
  try {
    const pathname = req.nextUrl.pathname;
    if (
      !loggedInAsOrganization.some((path) => pathname.startsWith(path)) &&
      loggedOut.some((path) => pathname.startsWith(path))
    ) {
      // if the pathname doesn't correspond to none of defined major.
      return NextResponse.next();
    } else {
      // fetching auth cookie
      const auth_cookie = req.cookies.get("e-acs");
      const headers = new Headers();

      // if the cookie is not available, need authentication to set the cookie
      if (!auth_cookie) {
        headers.set("redirect", "/login");
      }

      // return response with appropriate headers
      return NextResponse.next({
        request: {
          headers: headers,
        },
      });
    }
  } catch (error) {
    // TODO: logging the error in the errors journal
    console.error(error);
    return NextResponse.next();
  }
}
