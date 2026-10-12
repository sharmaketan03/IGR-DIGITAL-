import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log("Contact form submission received:", data);

    // In a production environment, send notification email or save to DB / Payload CMS
    return NextResponse.json({
      success: true,
      message: "Thank you for contacting us! Our team will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit request. Please try again." },
      { status: 500 }
    );
  }
}
