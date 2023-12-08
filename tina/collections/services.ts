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
    },
    {
      name: "imageAlt",
      type: "string",
      label: "Image texte alternatif",
    },
    {
      name: "title",
      type: "string",
      label: "Titre",
    },
    {
      name: "link",
      type: "reference",
      label: "Page correspondante",
      collections: ["page"],
    },
  ],
} as Collection;
