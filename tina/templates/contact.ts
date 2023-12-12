import type { Template } from "tinacms";

const contact: Template = {
  name: "contact",
  label: "Contact",
  fields: [
    {
      type: "string",
      name: "title",
      required: true,
      label: "Titre",
    },
    {
      type: "image",
      name: "image",
      required: true,
      label: "Image",
    },
  ],
};

export default contact;
