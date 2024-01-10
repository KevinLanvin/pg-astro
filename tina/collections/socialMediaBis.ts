import type { Collection } from "tinacms";

export default {
  name: "socialMedia",
  label: "Réseaux sociaux",
  path: "src/content/socialMediaBis",
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
