"use server";
import type { NextRequest } from "next/server";

export async function getCookieToken(req: NextRequest) {
  const auth_token = req.cookies.get("e-acs");
  return auth_token?.value ?? "";
}
