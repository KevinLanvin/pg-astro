import type { Template } from "tinacms";

const services: Template = {
  name: "services",
  label: "Mes services",
  fields: [
    {
      type: "string",
      name: "title",
      required: true,
      label: "Titre",
    },
  ],
};

export default services;
