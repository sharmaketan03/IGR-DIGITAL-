import type { CollectionConfig } from "payload";

export const Blogs: CollectionConfig = {
  slug: "blogs",

  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: "title",
    defaultColumns: [
      "title",
      "type",
      "category",
      "status",
      "publishedAt",
    ],
  },

  versions: {
    drafts: true,
  },

  fields: [
    // =====================================================
    // BASIC INFORMATION
    // =====================================================

    {
      name: "title",
      type: "text",
      required: true,
    },

    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },

    {
      name: "excerpt",
      type: "textarea",
      required: true,
    },

    {
      name: "content",
      type: "richText",
      required: true,
    },

    // =====================================================
    // BLOG TYPE
    // =====================================================

    {
      name: "type",
      type: "select",
      required: true,

      options: [
        {
          label: "Guide",
          value: "guide",
        },
        {
          label: "News",
          value: "news",
        },
        {
          label: "Case Study",
          value: "case-study",
        },
        {
          label: "Comparison",
          value: "comparison",
        },
        {
          label: "Insights",
          value: "insights",
        },
      ],
    },

    // =====================================================
    // CATEGORY
    // =====================================================

    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      required: true,
    },

    // =====================================================
    // TAGS
    // =====================================================

    {
      name: "tags",
      type: "array",

      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },

    // =====================================================
    // FEATURED IMAGE
    // =====================================================

    {
      name: "featuredImage",
      type: "upload",
      relationTo: "media",
    },

    // =====================================================
    // AUTHOR
    // =====================================================

    {
      name: "author",
      type: "group",

      fields: [
        {
          name: "name",
          type: "text",
          required: true,
        },

        {
          name: "role",
          type: "text",
        },

        {
          name: "image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },

    // =====================================================
    // ARTICLE INFORMATION
    // =====================================================

    {
      name: "readingTime",
      type: "number",
      min: 1,
    },

    {
      name: "publishedAt",
      type: "date",
    },

    // =====================================================
    // FEATURED / TRENDING
    // =====================================================

    {
      name: "isFeatured",
      type: "checkbox",
      defaultValue: false,
    },

    {
      name: "isTrending",
      type: "checkbox",
      defaultValue: false,
    },

    // =====================================================
    // SEO
    // =====================================================

    {
      name: "seo",
      type: "group",

      fields: [
        {
          name: "metaTitle",
          type: "text",

          admin: {
            description:
              "Recommended: around 50–60 characters.",
          },
        },

        {
          name: "metaDescription",
          type: "textarea",

          admin: {
            description:
              "Recommended: around 150–160 characters.",
          },
        },

        {
          name: "keywords",
          type: "array",

          fields: [
            {
              name: "keyword",
              type: "text",
            },
          ],
        },

        {
          name: "canonicalUrl",
          type: "text",
        },

        {
          name: "ogTitle",
          type: "text",
        },

        {
          name: "ogDescription",
          type: "textarea",
        },

        {
          name: "ogImage",
          type: "upload",
          relationTo: "media",
        },

        {
          name: "twitterCard",
          type: "select",

          defaultValue: "summary_large_image",

          options: [
            {
              label: "Summary",
              value: "summary",
            },
            {
              label: "Summary Large Image",
              value: "summary_large_image",
            },
          ],
        },

        {
          name: "noIndex",
          type: "checkbox",
          defaultValue: false,
        },

        {
          name: "noFollow",
          type: "checkbox",
          defaultValue: false,
        },
      ],
    },

    // =====================================================
    // AEO
    // =====================================================

    {
      name: "aeo",
      type: "group",

      fields: [
        {
          name: "shortAnswer",
          type: "textarea",

          admin: {
            description:
              "Short direct answer suitable for AI/search answer extraction.",
          },
        },

        {
          name: "keyTakeaways",
          type: "array",

          fields: [
            {
              name: "point",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },

    // =====================================================
    // FAQ
    // =====================================================

    {
      name: "faqs",
      type: "array",

      fields: [
        {
          name: "question",
          type: "text",
          required: true,
        },

        {
          name: "answer",
          type: "textarea",
          required: true,
        },
      ],
    },

    // =====================================================
    // VIEWS
    // =====================================================

    {
      name: "views",
      type: "number",

      defaultValue: 0,

      admin: {
        readOnly: true,
      },
    },
  ],
};