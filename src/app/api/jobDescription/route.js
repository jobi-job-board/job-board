import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

//GET / job listings;
export async function GET() {
  try {
    const listings = await prisma.jobDescription.findMany();
    return NextResponse.json({
      success: true,
      listings,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}

// export async function POST(request) {
//   const res = await request.json();
//   const { title, content } = res;
//   console.log({ res });

//   const result = await prisma.posts.create({
//     data: {
//       title,
//       content,
//       author: {
//         create: {
//           name: 'Ryan',
//         },
//       },
//     },
//   });

//   return NextResponse.json({
//     data: res,
//   });
// }
