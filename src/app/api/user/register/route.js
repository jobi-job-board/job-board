import prisma from "src/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { createSecretKey } from "crypto";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, password, role } = data;

    if (!name) {
      return NextResponse.json({
        success: false,
        error: "Please enter your name.",
      });
    }
    if (!email) {
      return NextResponse.json({
        success: false,
        error: "Please enter your email.",
      });
    }
    if (!password) {
      return NextResponse.json({
        success: false,
        error: "Please enter your password.",
      });
    }

    if (!role) {
      return NextResponse.json({
        success: false,
        error: "Please select a role.",
      });
    }

    const checkUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (checkUser) {
      return NextResponse.json({
        success: false,
        error: "Email already exists, please login",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
      },
    });
    if (!!user) {
      return NextResponse.json({
        success: true,
      });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
