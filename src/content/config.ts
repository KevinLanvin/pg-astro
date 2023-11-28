import * as sectionTypes from "./_sectionTypes";

import { defineCollection, reference, z } from "astro:content";

const pageCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pageContent: z.array(
      z.discriminatedUnion(
        "_template",
        // @ts-ignore
        Object.values(sectionTypes)
      )
    ),
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

const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    image: z.string(),
    imageAlt: z.string(),
    title: z.string(),
    link: reference("pages"),
  }),
});

export const collections = {
  header: headerCollection,
  pages: pageCollection,
  services: servicesCollection,
  socialMedia: socialMediaCollection,
};
