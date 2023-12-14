import type { Template } from "tinacms";

const text: Template = {
  name: "text",
  label: "Titre + Paragraphe",
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

export default text;
