import mongoose, { Schema, Document, Model } from "mongoose";

export const BLOG_TYPES = [
  "guide",
  "news",
  "case-study",
  "comparison",
  "insights",
] as const;

export type BlogType = (typeof BLOG_TYPES)[number];

export interface IFAQ {
  question: string;
  answer: string;
}

export interface IAuthor {
  name: string;
  role?: string;
  image?: string;
}

export interface IBlog extends Document {
  title: string;
  slug: string;

  excerpt: string;

  content: string;

  type: BlogType;

  category: mongoose.Types.ObjectId;

  tags: string[];

  featuredImage: string;

  author: IAuthor;

  readingTime: number;

  isFeatured: boolean;
  isTrending: boolean;

  status: "draft" | "published";

  publishedAt?: Date;

  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    canonicalUrl?: string;
    ogImage?: string;
  };

  faqs: IFAQ[];

  views: number;

  createdAt: Date;
  updatedAt: Date;
}

const FAQSchema = new Schema<IFAQ>(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },

    answer: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const AuthorSchema = new Schema<IAuthor>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    role: {
      type: String,
      trim: true,
      default: "",
    },

    image: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    _id: false,
  }
);

const BlogSchema = new Schema<IBlog>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    excerpt: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: BLOG_TYPES,
      required: true,
      index: true,
    },

    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      index: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    featuredImage: {
      type: String,
      default: "",
    },

    author: {
      type: AuthorSchema,
      required: true,
    },

    readingTime: {
      type: Number,
      default: 5,
    },

    isFeatured: {
      type: Boolean,
      default: false,
      index: true,
    },

    isTrending: {
      type: Boolean,
      default: false,
      index: true,
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      index: true,
    },

    publishedAt: {
      type: Date,
    },

    seo: {
      metaTitle: {
        type: String,
        default: "",
      },

      metaDescription: {
        type: String,
        default: "",
      },

      keywords: {
        type: [String],
        default: [],
      },

      canonicalUrl: {
        type: String,
        default: "",
      },

      ogImage: {
        type: String,
        default: "",
      },
    },

    faqs: {
      type: [FAQSchema],
      default: [],
    },

    views: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

BlogSchema.index({
  title: "text",
  excerpt: "text",
  content: "text",
  tags: "text",
});

BlogSchema.index({
  status: 1,
  publishedAt: -1,
});

BlogSchema.index({
  category: 1,
  status: 1,
  publishedAt: -1,
});

const Blog: Model<IBlog> =
  mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);

export default Blog;