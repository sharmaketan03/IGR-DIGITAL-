import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",

  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "slug", "isActive"],
  },

  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true,
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },

    {
      name: "description",
      type: "textarea",
    },

    {
      name: "isActive",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};