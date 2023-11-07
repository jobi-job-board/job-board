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

export async function POST(req) {
  try {
    const {
      title,
      description,
      shortDescription,
      type,
      salary,
      country,
      city,
      contactEmail,
    } = req.body;
    const { id, role } = req.user;
    if (!id) {
      return NextResponse.json({
        success: false,
        error: "You must be logged in to post a job listing",
      });
    }
    if (role !== "EMPLOYER") {
      return NextResponse.json({
        success: false,
        error: "You must be an employer",
      });
    }

    if (
      !title ||
      !description ||
      !shortDescription ||
      !type ||
      !salary ||
      !country ||
      !city ||
      !contactEmail
    ) {
      return NextResponse.json({
        success: false,
        error: "Please fill out the entire form",
      });
    }
    const listing = await prisma.jobDescription.create({
      data: {
        userId: id,
        title,
        description,
        shortDescription,
        type,
        salary,
        country,
        city,
        contactEmail,
      },
    });
    return NextResponse.json({
      success: true,
      listing,
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
