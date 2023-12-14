import {
  contactCollection,
  coursesCollection,
  disclaimerCollection,
  headerCollection,
  opinionsCollection,
  pagesCollection,
  pricesCollection,
  servicesCollection,
  socialMediaCollection,
} from "./collections";

import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "9be7e833-5d87-44c2-a9e9-f233fb2e3faa", // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      contactCollection,
      disclaimerCollection,
      headerCollection,
      socialMediaCollection,
      pagesCollection,
      servicesCollection,
      opinionsCollection,
      pricesCollection,
      coursesCollection,
    ],
  },
});
