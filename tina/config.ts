import {
  contactCollection,
  coursesCollection,
  disclaimerCollection,
  formationsCollection,
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
  token: process.env.TINA_TOKEN, // This should match the value in your .env file
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // This should match the value in your .env
  branch,
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
      formationsCollection,
    ],
  },
});
