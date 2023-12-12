import type { Collection } from "tinacms";

export default {
  name: "contact",
  label: "Contact",
  path: "src/content/contact",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  fields: [
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
      name: "address1",
      type: "string",
      label: "Numéro de rue et rue",
    },
    {
      name: "address2",
      type: "string",
      label: "Code postal et ville",
    },
  ],
} as Collection;
