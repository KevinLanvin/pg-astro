import type { Collection } from "tinacms";

export default {
  name: "prices",
  label: "Tarifs des consultations",
  path: "src/content/prices",
  ui: {
    filename: {
      readOnly: true,
      slugify: (values) => {
        return `${values.title?.toLowerCase().replace(/ /g, "-")}`;
      },
    },
  },
  fields: [
    {
      name: "title",
      type: "string",
      label: "Titre",
      required: true,
    },
    {
      name: "price",
      type: "string",
      label: "Prix de la consultation",
      required: true,
    },
    {
      name: "duration",
      type: "string",
      label: "Durée de la consultation",
    },
    {
      name: "linkLabel",
      type: "string",
      label: "Texte du bouton",
      ui: {
        description: "Ex: Prendre RDV",
      },
      required: true,
    },
    {
      name: "link",
      type: "reference",
      label: "Page vers laquelle le lien renvoie",
      collections: ["page"],
      required: true,
    },
    {
      name: "image",
      type: "image",
      label: "Image de fond de la carte du tarif",
      required: true,
    },
  ],
} as Collection;
