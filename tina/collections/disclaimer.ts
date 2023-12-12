import type { Collection } from "tinacms";

export default {
  name: "disclaimer",
  label: "Disclaimer",
  path: "src/content/disclaimer",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
    {
      name: "text",
      type: "string",
      label: "Texte",
    },
  ],
} as Collection;
