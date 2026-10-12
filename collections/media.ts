import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",

  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: "alt",
    defaultColumns: ["alt", "updatedAt"],
  },

  upload: {
    mimeTypes: [
      "image/jpeg",
      "image/png",
      "image/webp",
      "image/avif",
    ],

    imageSizes: [
      {
        name: "thumbnail",
        width: 400,
        height: 300,
        position: "centre",
      },
      {
        name: "card",
        width: 800,
        height: 600,
        position: "centre",
      },
      {
        name: "large",
        width: 1600,
        height: 1200,
        position: "centre",
      },
    ],
  },

  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },

    {
      name: "caption",
      type: "text",
    },
  ],
};