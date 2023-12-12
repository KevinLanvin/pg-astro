import type { Template } from "tinacms";

const disclaimer: Template = {
  name: "disclaimer",
  label: "Disclaimer",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Est ce que les pingouins ont des genoux ?",
      required: true,
    },
  ],
};

export default disclaimer;
