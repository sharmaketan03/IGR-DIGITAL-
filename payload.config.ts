import path from "path";
import { fileURLToPath } from "url";

import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

import { Users } from "./collections/Users";
import { Categories } from "./collections/categories";
import { Blogs } from "./collections/blog";
import { Media } from "./collections/media";
import { Subscribers } from "./collections/subscribers";
import { Leads } from "./collections/leads";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,

    importMap: {
      baseDir: dirname,
    },
  },

  collections: [
    Users,
    Categories,
    Blogs,
    Media,
    Subscribers,
    Leads,
  ],

  editor: lexicalEditor(),

  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "",
  }),

  secret: process.env.PAYLOAD_SECRET || "",

  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});