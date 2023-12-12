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
          const pageName = page.page?.split("/").pop().split(".").shift();
          return { label: pageName };
        },
      },
    },
  ],
} as Collection;
