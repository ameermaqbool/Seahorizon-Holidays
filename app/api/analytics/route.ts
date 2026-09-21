import { NextResponse } from 'next/server';
export async function POST() {
  return NextResponse.json({ error: 'Monitoring is not configured.' },
    { status: 503, headers: { 'Cache-Control': 'no-store' } });
}
export async function GET() {
  return NextResponse.json({ error: 'Analytics is not configured.' },
    { status: 503, headers: { 'Cache-Control': 'no-store' } });
}
