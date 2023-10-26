import type { Template } from "tinacms";

const hero: Template = {
  name: "hero",
  label: "Bannière d'accueil",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Titre",
      required: true,
    },
    {
      type: "string",
      name: "buttonLabel",
      label: "Label du bouton",
      required: true,
    },
    {
      type: "image",
      name: "background",
      label: "Bannière",
      required: true,
    },
  ],
};

export default hero;
