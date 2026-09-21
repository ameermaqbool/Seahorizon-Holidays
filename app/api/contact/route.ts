import { NextResponse } from 'next/server';
export async function POST() {
  return NextResponse.json(
    { error: 'Online message delivery is not configured. Please use WhatsApp or call +91 8075301729.' },
    { status: 503, headers: { 'Cache-Control': 'no-store' } },
  );
}
