import { getCookieToken } from "@/library/requests/utility/getCookieToken";
import axios, { AxiosError } from "axios";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  try {
    const token = await getCookieToken(request);
    const result = await axios.get(
      `${process.env.GATEWAY_ENDPOINT}/api/v1/facebook/redirect`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const data = await result.data;
    return NextResponse.json({ ...data }, { status: 200 });
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.code === "ERR_BAD_REQUEST") {
        return NextResponse.json(
          {
            code: 100,
            subcode: 401,
            message: "Failed to create instagram channel",
          },
          { status: 200 }
        );
      }
    } else {
      console.log(error);
      return NextResponse.json(
        { code: 100, subcode: 500, message: "Something went wrong" },
        { status: 200 }
      );
    }
  }
}
