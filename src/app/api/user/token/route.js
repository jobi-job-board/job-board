import { NextRequest, NextResponse } from "next/server";
import prisma from "src/lib/prisma";

export async function GET(req) {
  try {
    const data = await req.json();
    // console.log(data);
    // if (!data.user) {
    //   return NextResponse.json({ success: false, error: "please log in" });
    // }
    const user = data.user;
    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
