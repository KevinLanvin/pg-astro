import type { Collection } from "tinacms";

export default {
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
      required: true,
    },
    {
      name: "imageAlt",
      type: "string",
      label: "Image texte alternatif",
      required: true,
    },
    {
      name: "title",
      type: "string",
      label: "Titre",
      required: true,
    },
    {
      name: "link",
      type: "reference",
      label: "Page correspondante",
      collections: ["page"],
      required: true,
    },
  ],
} as Collection;
