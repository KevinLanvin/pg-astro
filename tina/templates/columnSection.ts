import type { Template } from "tinacms";

const columnSection: Template = {
  name: "columnSection",
  label: "Section à 2 colones",
  ui: {
    itemProps: ({ title }) => {
      return { label: title };
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      required: true,
      label: "Titre",
    },
    {
      type: "rich-text",
      name: "leftColumn",
      required: true,
      label: "Paragraphe de gauche",
    },
    {
      type: "rich-text",
      name: "rightColumn",
      required: true,
      label: "Paragraphe de droite",
    },
    {
      type: "string",
      name: "linkLabel",
      label: "Label du bouton",
    },
    {
      name: "link",
      type: "reference",
      label: "Page vers laquelle le lien renvoie",
      collections: ["page"],
    },
  ],
};

export default columnSection;
