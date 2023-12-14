import type { Template } from "tinacms";

const courses: Template = {
  name: "courses",
  label: "Stages et Initiations",
  fields: [
    {
      type: "string",
      name: "title",
      required: true,
      label: "Titre",
      ui: {
        description: "Ex: Stages et Initiations",
      },
    },
  ],
};

export default courses;
