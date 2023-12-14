import type { Collection } from "tinacms";

export default {
  name: "courses",
  label: "Stages et Initiations",
  path: "src/content/courses",
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
      label: "Prix du stage",
      required: true,
    },
    {
      name: "linkLabel",
      type: "string",
      label: "Texte du bouton",
      ui: {
        description: "Ex: En savoir plus",
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
      label: "Image de fond de la carte du stage",
      required: true,
    },
  ],
} as Collection;
