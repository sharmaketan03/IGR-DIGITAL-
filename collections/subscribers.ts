import type { CollectionConfig } from "payload";

export const Subscribers: CollectionConfig = {
  slug: "subscribers",
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "status", "createdAt"],
    description: "Newsletter and blog email subscribers",
  },
  access: {
    read: () => true,
    create: () => true, // Public can subscribe
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: "email",
      type: "email",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "status",
      type: "select",
      defaultValue: "subscribed",
      options: [
        { label: "Subscribed", value: "subscribed" },
        { label: "Unsubscribed", value: "unsubscribed" },
      ],
    },
    {
      name: "source",
      type: "text",
      defaultValue: "website-newsletter",
      admin: {
        readOnly: true,
      },
    },
  ],
  timestamps: true,
};
