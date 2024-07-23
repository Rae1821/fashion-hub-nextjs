import { auth } from "@/auth";
import { NextResponse } from "next/server";

// in order to protect the entire route you need to wrap the route in the auth that we created
export const GET = auth(function GET(req) {
  if (req.auth) return NextResponse.json(req.auth);
  return NextResponse.json({ message: "Not Authenticated" }, { status: 401 });
});
