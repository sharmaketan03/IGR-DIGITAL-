import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = body?.email ? String(body.email).trim().toLowerCase() : "";
    const source = body?.source ? String(body.source).trim() : "website-newsletter";

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const payload = await getPayload({ config });

    // Check if already subscribed
    const existing = await payload.find({
      collection: "subscribers",
      where: {
        email: {
          equals: email,
        },
      },
      limit: 1,
    });

    if (existing.docs && existing.docs.length > 0) {
      return NextResponse.json({
        success: true,
        message: "You are already subscribed to our newsletter!",
        alreadySubscribed: true,
      });
    }

    // Save new subscriber to Payload / MongoDB
    const doc = await payload.create({
      collection: "subscribers",
      data: {
        email,
        status: "subscribed",
        source,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Thank you for subscribing! Your email has been saved.",
      data: { id: doc.id, email: doc.email },
    });
  } catch (error: any) {
    console.error("Newsletter Subscription API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save subscription. Please try again." },
      { status: 500 }
    );
  }
}
