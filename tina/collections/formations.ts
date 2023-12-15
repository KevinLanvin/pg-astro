import type { Collection } from "tinacms";

export default {
  name: "formations",
  label: "Mes formations",
  path: "src/content/formations",
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
      type: "string",
      name: "title",
      required: true,
      label: "Titre",
    },
    {
      type: "string",
      name: "date",
      required: true,
      label: "Date",
    },
    {
      type: "image",
      name: "image",
      required: true,
      label: "Icone",
    },
    {
      type: "number",
      name: "order",
      required: true,
      label: "Ordre",
      ui: {
        description:
          "Possibilité d'utiliser l'année comme ordre. Les formations seront affichées par ordre croissant",
      },
    },
  ],
} as Collection;
