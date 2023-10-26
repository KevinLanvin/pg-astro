import * as sectionTypes from "./_sectionTypes";

import { defineCollection, reference, z } from "astro:content";

const pageCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pageContent: z.array(z.union<any>(Object.values(sectionTypes))),
  }),
});

const socialMediaCollection = defineCollection({
  type: "content",
  schema: z.object({
    facebook: z.string(),
    instagram: z.string(),
    linkedIn: z.string(),
  }),
});

const headerCollection = defineCollection({
  type: "content",
  schema: z.object({
    tel: z.string(),
    email: z.string(),
    socialMedias: reference("socialMedia"),
    pages: z.array(reference("pages")),
    logo: z.string(),
  }),
});

export const collections = {
  pages: pageCollection,
  header: headerCollection,
  socialMedia: socialMediaCollection,
};
