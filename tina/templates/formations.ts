import type { Template } from "tinacms";

const formations: Template = {
  name: "formations",
  label: "Mes Formations",
  fields: [
    {
      type: "string",
      name: "title",
      required: true,
      label: "Titre",
      ui: {
        description: "Ex: Mes Formations",
      },
    },
  ],
};

export default formations;
