import { NextResponse, type NextRequest } from "next/server";
import { middleware as active } from "@/middleware/config";

export const config = { matcher: "/((?!.*\\.).*)" };

export async function middleware(req: NextRequest) {
  // Map through activated middleware functions
  const functions = active.map((fn) => fn(req));
  // Array to store middleware headers
  const headers = [];

  // Loop through middleware functions
  for (const middleware of functions) {
    // Execute middleware function and await the result
    const result = await middleware;
    // Check if the result is not okay and return it
    if (!result.ok) {
      return result;
    }
    // Push middleware headers to the array
    headers.push(result.headers);
  }

  for (const header of headers) {
    const redirect = header.get("x-middleware-request-redirect");
    if (redirect) {
      // If a redirect is found, store the value and break the loop
      return NextResponse.redirect(new URL(redirect, req.url), {
        status: 307, // Use the appropriate HTTP status code for the redirect
      });
    }
  }

  // If no redirection is needed, proceed to the next middleware or route handler
  return NextResponse.next();
}
