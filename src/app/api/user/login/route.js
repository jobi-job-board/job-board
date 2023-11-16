import prisma from 'src/lib/prisma';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req) {
  try {
    const data = await req.json();
    const { email, password } = data;
    if (!email || !password) {
      return NextResponse.json({
        success: false,
        error: 'You must provide an email and password when logging in.',
      });
    }
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return NextResponse.json({
        success: false,
        error: 'Email and/or password is invalid.',
      });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({
        success: false,
        error: 'Email and/or password is invalid.',
      });
    }
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    return NextResponse.json({
      success: true,
      token,
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
