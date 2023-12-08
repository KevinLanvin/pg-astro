import type { Collection } from "tinacms";

export default {
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
} as Collection;
