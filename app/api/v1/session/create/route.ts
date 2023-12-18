import axios from "axios";
import { NextResponse, type NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  try {
    const access_token_url = new URL(request.url);
    const access_token = access_token_url.searchParams.get("access_token");
    if (!access_token) {
      // no access_token
      return NextResponse.redirect(`${process.env.HOST_ENDPOINT}/register`);
    }
    // check if the access_token is valid from the server.
    const result = await axios.get(
      `${process.env.GATEWAY_ENDPOINT}/api/v1/users/session`,
      { headers: { Authorization: `Bearer ${access_token}` } }
    );

    if (result.data) {
      const response = NextResponse.redirect(
        `${process.env.HOST_ENDPOINT}/organization/dashboard`
      );
      response.cookies.set({
        name: "e-acs",
        value: access_token,
        httpOnly: true,
        secure: true,
        sameSite: "lax",
      });
      return response;
    }
    throw new Error("Failed to complete user authentication");
  } catch (error) {
    console.log(error);
    return NextResponse.redirect("/login");
  }
}
