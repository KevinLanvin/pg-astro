import * as templates from "./templates";

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
      {
        name: "services",
        label: "Services",
        path: "src/content/services",
        ui: {
          filename: {
            readonly: true,
            slugify: (values) => {
              return `${values.title?.toLowerCase().replace(/ /g, "-")}`;
            },
          },
        },
        fields: [
          {
            name: "image",
            type: "image",
            label: "Image",
          },
          {
            name: "imageAlt",
            type: "string",
            label: "Image texte alternatif",
          },
          {
            name: "title",
            type: "string",
            label: "Titre",
          },
          {
            name: "link",
            type: "reference",
            label: "Page correspondante",
            collections: ["page"],
          },
        ],
      },
      {
        name: "socialMedias",
        label: "Réseaux sociaux",
        path: "src/content/socialMedia",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            name: "facebook",
            type: "string",
            label: "Facebook",
          },
          {
            name: "instagram",
            type: "string",
            label: "Instagram",
          },
          {
            name: "linkedin",
            type: "string",
            label: "LinkedIn",
          },
        ],
      },
      {
        name: "header",
        label: "Header",
        path: "src/content/header",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            name: "logo",
            type: "image",
            label: "Logo",
          },
          {
            name: "tel",
            type: "string",
            label: "Numéro de téléphone",
          },
          {
            name: "email",
            type: "string",
            label: "Email",
          },
          {
            name: "socialMedias",
            type: "reference",
            label: "Réseaux sociaux",
            collections: ["socialMedias"],
          },
          {
            name: "pages",
            type: "object",
            label: "Pages du menu",
            list: true,
            fields: [
              {
                name: "page",
                type: "reference",
                label: "Page",
                collections: ["page"],
              },
            ],
            ui: {
              itemProps: (page) => {
                return { label: page.page };
              },
            },
          },
        ],
      },
      {
        name: "page",
        label: "Pages",
        path: "src/content/pages",
        fields: [
          {
            name: "title",
            label: "Titre",
            type: "string",
          },
          {
            name: "pageContent",
            type: "object",
            list: true,
            label: "Page content",
            templates: [...Object.values(templates)],
          },
        ],
      },
    ],
  },
});
