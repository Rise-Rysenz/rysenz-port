import { NextResponse } from 'next/server';
import reviewsData from '../../data/reviews.json';
export async function GET() {
  try {
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return NextResponse.json(reviewsData);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}