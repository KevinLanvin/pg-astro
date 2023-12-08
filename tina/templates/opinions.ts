import type { Template } from "tinacms";

const opinions: Template = {
  name: "opinions",
  label: "Témoignages",
  fields: [
    {
      type: "string",
      name: "title",
      required: true,
      label: "Titre",
    },
    {
      type: "image",
      name: "background",
      required: true,
      label: "Image de fond",
    },
  ],
};

export default opinions;
