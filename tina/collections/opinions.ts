import type { Collection } from "tinacms";

export default {
  name: "opinions",
  label: "Témoignages",
  path: "src/content/opinions",
  ui: {
    filename: {
      readonly: true,
      slugify: (values) => {
        return `${values.authorName?.toLowerCase().replace(/ /g, "-")}-${
          values.authorAge
        }`;
      },
    },
  },
  fields: [
    {
      name: "opinion",
      type: "string",
      label: "Témoignage",
    },
    {
      name: "authorName",
      type: "string",
      label: "Nom de l'auteur",
    },
    {
      name: "authorAge",
      type: "number",
      label: "Age de l'auteur",
      ui: {
        validate: (value) => {
          if (value < 0 || value > 100)
            return "L'âge doit être compris entre 0 et 100 ans";
        },
      },
    },
  ],
} as Collection;
