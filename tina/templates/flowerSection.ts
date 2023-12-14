import type { Template } from "tinacms";

const flowerSection: Template = {
  name: "flowerSection",
  label: "Section à fleur",
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
      name: "paragraph",
      required: true,
      label: "Paragraphe",
    },
  ],
};

export default flowerSection;
