import { NextResponse } from 'next/server';
import prisma from '@lib/partials';

//GET / job listings;

export async function GET(request, { params }) {
  try {
    const listingId = params.listingId;
    const listing = await prisma.jobDescription.findUnique({
      where: {
        id: listingId,
      },
    });
    if (!listing) {
      return NextResponse.json({
        success: false,
        error: 'listing not found',
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
