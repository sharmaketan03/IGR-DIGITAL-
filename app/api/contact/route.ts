import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Identify Client Identity & Contact Info
    const firstName = body.firstName || body.first_name || "";
    const lastName = body.lastName || body.last_name || "";
    const name = body.name || [firstName, lastName].filter(Boolean).join(" ") || "Prospect / Inquirer";
    const email = (body.email || body.businessEmail || "").trim().toLowerCase();
    const phone = body.phone || body.phoneNumber || (body.phoneCode ? `${body.phoneCode} ${body.phoneNumber || ""}`.trim() : "");
    const website = body.website || body.websiteUrl || body.url || "";
    const service = body.service || body.serviceRequired || body.selectedServices || "";
    const budget = body.budget || body.monthlyBudget || body.monthlySpent || body.monthlySpend || "";
    const country = body.country || "";
    const whatsapp = body.whatsapp || "";
    const message = body.message || body.projectDescription || body.targetKeywords || "";
    const pageUrl = body.pageUrl || req.headers.get("referer") || "";

    // 2. Identify the EXACT Lead Type & Purpose so the sales team knows immediately
    const formSource = (body.formSource || body.source || "general").toLowerCase();

    let leadType:
      | "website-audit"
      | "contact-inquiry"
      | "growth-proposal"
      | "diagnostic-widget"
      | "support-quote"
      | "general-inquiry" = "general-inquiry";

    let formName = "Website Contact Form";

    if (formSource.includes("audit") && (formSource.includes("landing") || formSource.includes("client"))) {
      leadType = "website-audit";
      formName = "Free Website Audit Request Page (/free-website-audit-services/)";
    } else if (formSource.includes("hero")) {
      leadType = "contact-inquiry";
      formName = "Main Contact Us Hero Form (/contact/)";
    } else if (formSource.includes("final") || formSource.includes("proposal")) {
      leadType = "growth-proposal";
      formName = "Service Proposal / Let's Talk Form (/services/*)";
    } else if (formSource.includes("widget")) {
      leadType = "diagnostic-widget";
      formName = "Diagnostic SEO Growth Blueprint Widget";
    } else if (formSource.includes("overlap") || formSource.includes("support")) {
      leadType = "support-quote";
      formName = "Discover How We Can Help (Overlapping Footer Card)";
    } else if (formSource.includes("audit")) {
      leadType = "website-audit";
      formName = "Website Audit Request Form";
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const payload = await getPayload({ config });

    // 3. Save lead inquiry directly to Payload CMS / MongoDB
    const doc = await payload.create({
      collection: "leads",
      data: {
        leadType,
        formName,
        name,
        email,
        phone,
        website,
        service,
        budget,
        country,
        whatsapp,
        message,
        pageUrl,
        status: "new",
      },
    });

    return NextResponse.json({
      success: true,
      message: "Thank you! Your details have been received and our strategist will reach out shortly.",
      data: {
        id: doc.id,
        email: doc.email,
        leadType: doc.leadType,
        formName: doc.formName,
      },
    });
  } catch (error: any) {
    console.error("Contact Form Submission API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form. Please try again." },
      { status: 500 }
    );
  }
}
