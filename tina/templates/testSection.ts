import type { Template } from "tinacms";

const testSection: Template = {
  name: "section",
  label: "Section",
  fields: [
    {
      type: "string",
      name: "title",
      required: true,
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
    },
  ],
};

export default testSection;
