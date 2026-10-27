import type { CollectionConfig } from "payload";

export const Leads: CollectionConfig = {
  slug: "leads",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["leadType", "name", "email", "phone", "service", "website", "createdAt"],
    description: "Inquiries, Free Website Audit requests, and Quotation leads",
    group: "Inquiries & CRM",
  },
  access: {
    read: ({ req: { user } }) => Boolean(user),
    create: () => true, // Public can submit leads
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: "leadType",
      type: "select",
      required: true,
      defaultValue: "general-inquiry",
      label: "Lead Category / Intent",
      options: [
        { label: "🔍 Free Website Audit Request", value: "website-audit" },
        { label: "📞 Contact Us / Direct Query", value: "contact-inquiry" },
        { label: "💼 Custom Growth Proposal / Quote", value: "growth-proposal" },
        { label: "📊 Diagnostic SEO Audit Widget", value: "diagnostic-widget" },
        { label: "🤝 Quick Support / Overlap Form", value: "support-quote" },
        { label: "📨 Other Lead", value: "general-inquiry" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "formName",
      type: "text",
      label: "Exact Form Filled",
      admin: {
        position: "sidebar",
        readOnly: true,
      },
    },
    {
      name: "name",
      type: "text",
      label: "Client / Prospect Name",
    },
    {
      name: "email",
      type: "email",
      required: true,
      index: true,
      label: "Client Email",
    },
    {
      name: "phone",
      type: "text",
      label: "Phone / WhatsApp",
    },
    {
      name: "website",
      type: "text",
      label: "Target Website URL",
    },
    {
      name: "service",
      type: "text",
      label: "Requested Service(s)",
    },
    {
      name: "budget",
      type: "text",
      label: "Monthly Budget",
    },
    {
      name: "country",
      type: "text",
      label: "Country / Region",
    },
    {
      name: "whatsapp",
      type: "text",
      label: "WhatsApp Number",
    },
    {
      name: "message",
      type: "textarea",
      label: "Detailed Message / Notes / Target Keywords",
    },
    {
      name: "pageUrl",
      type: "text",
      label: "Source Page URL",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      label: "Follow-up Status",
      options: [
        { label: "🔴 New / Unread", value: "new" },
        { label: "🟡 Contacted / Followed Up", value: "contacted" },
        { label: "🟢 Qualified Lead", value: "qualified" },
        { label: "📄 Proposal / Audit Sent", value: "proposal" },
        { label: "🎉 Won / Client Converted", value: "won" },
        { label: "❌ Lost / Unresponsive", value: "lost" },
      ],
      admin: {
        position: "sidebar",
      },
    },
  ],
  timestamps: true,
};
