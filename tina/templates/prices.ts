import type { Template } from "tinacms";

const prices: Template = {
  name: "prices",
  label: "Tarifs",
  fields: [
    {
      type: "string",
      name: "title",
      required: true,
      label: "Titre",
    },
  ],
};

export default prices;
