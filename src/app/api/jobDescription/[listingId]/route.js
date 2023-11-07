import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";

//GET / job listings;

export async function GET(request, { params }) {
  try {
    const { listingId } = params;
    const listing = await prisma.jobDescription.findUnique({
      where: {
        id: listingId,
      },
    });
    if (!listing) {
      return NextResponse.json({
        success: false,
        error: "listing not found",
      });
    }
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

export async function DELETE(request, { params }) {
  try {
    const { listingId } = params;
    const listing = await prisma.jobDescription.findUnique({
      where: {
        id: listingId,
      },
    });
    if (!listing) {
      return NextResponse.json({
        success: false,
        error: "Listing not found",
      });
    }
    if (request.user.id !== listing.userId) {
      return NextResponse.json({
        success: false,
        error: "You must be the owner of the listing to delete",
      });
    }
    await prisma.jobDescription.delete({
      where: {
        id: listingId,
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
