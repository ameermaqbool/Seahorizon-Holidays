import { NextRequest, NextResponse } from 'next/server';
import { sanitizeInput, validateEmail, validatePhone, rateLimitCheck } from '@/lib/utils/security';

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIP = request.ip || 'unknown';
    if (!rateLimitCheck(clientIP, 3, 300000)) { // 3 requests per 5 minutes
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    
    // Input validation and sanitization
    const sanitizedData = {
      firstName: sanitizeInput(body.firstName || ''),
      lastName: sanitizeInput(body.lastName || ''),
      email: sanitizeInput(body.email || ''),
      phone: sanitizeInput(body.phone || ''),
      message: sanitizeInput(body.message || ''),
      travelDates: sanitizeInput(body.travelDates || ''),
      travelers: sanitizeInput(body.travelers || ''),
    };

    // Validation
    if (!sanitizedData.firstName || !sanitizedData.lastName) {
      return NextResponse.json(
        { error: 'First name and last name are required.' },
        { status: 400 }
      );
    }

    if (!validateEmail(sanitizedData.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (sanitizedData.phone && !validatePhone(sanitizedData.phone)) {
      return NextResponse.json(
        { error: 'Please provide a valid phone number.' },
        { status: 400 }
      );
    }

    if (!sanitizedData.message || sanitizedData.message.length < 10) {
      return NextResponse.json(
        { error: 'Please provide a message with at least 10 characters.' },
        { status: 400 }
      );
    }

    // Here you would typically save to database or send email
    // For now, we'll just return success
    
    return NextResponse.json(
      { message: 'Thank you for your inquiry. We will contact you soon!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}