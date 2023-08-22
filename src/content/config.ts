import * as sectionTypes from "./_sectionTypes";

import { defineCollection, z } from "astro:content";

const pageCollection = defineCollection({
  type: "content",
  schema: z.object({
    pageContent: z.array(z.union<any>(Object.values(sectionTypes))),
  }),
});

export const collections = {
  pages: pageCollection,
};
