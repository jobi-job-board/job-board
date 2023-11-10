import { NextRequest, NextResponse } from "next/server";

export async function GET(req) {
  try {
    if (!req.user) {
      return NextResponse.json({ success: false, error: "please log in" });
    }
    const user = req.user;
    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
