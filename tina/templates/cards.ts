import type { Template } from "tinacms";

const cards: Template = {
  name: "cards",
  label: "Section de cartes",
  fields: [
    {
      type: "object",
      name: "cards",
      label: "Cartes",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Titre",
          required: true,
        },
        {
          type: "rich-text",
          name: "subtitle",
          label: "Sous-titre",
        },
        {
          type: "rich-text",
          name: "content",
          label: "Contenu",
          required: true,
        },
        {
          type: "string",
          name: "linkLabel",
          label: "Texte du bouton",
        },
        {
          type: "reference",
          name: "link",
          label: "Page vers laquelle le lien renvoie",
          collections: ["page"],
        },
        {
          type: "image",
          name: "image",
          label: "Image",
          required: true,
        },
      ],
    },
  ],
};

export default cards;
