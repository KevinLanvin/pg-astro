import * as templates from "../templates";

import type { Collection } from "tinacms";

export default {
  name: "page",
  label: "Pages",
  path: "src/content/pages",
  fields: [
    {
      name: "title",
      label: "Titre",
      type: "string",
    },
    {
      name: "pageContent",
      type: "object",
      list: true,
      label: "Page content",
      templates: [...Object.values(templates)],
    },
  ],
} as Collection;
