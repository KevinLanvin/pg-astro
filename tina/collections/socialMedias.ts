import type { Collection } from "tinacms";

export default {
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
} as Collection;
