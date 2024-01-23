import * as sectionTypes from "./_sectionTypes";

import { defineCollection, z } from "astro:content";

const pageCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    url: z.string(),
    description: z.string().optional(),
    pageContent: z.array(
      z.discriminatedUnion(
        "_template",
        // @ts-ignore
        Object.values(sectionTypes),
      ),
    ),
  }),
});

const headerCollection = defineCollection({
  type: "content",
  schema: z.object({
    logo: z.string(),
    entries: z.array(
      z.discriminatedUnion("type", [
        z.object({
          type: z.literal("page"),
          page: z.string(),
        }),
        z.object({
          type: z.literal("submenu"),
          title: z.string(),
          pages: z.array(z.string()),
        }),
      ]),
    ),
  }),
});

const socialMediaCollection = defineCollection({
  type: "content",
  schema: z.object({
    facebook: z.string(),
    instagram: z.string(),
    linkedin: z.string(),
  }),
});

const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    image: z.string(),
    imageAlt: z.string(),
    title: z.string(),
    link: z.string(),
  }),
});

const contactCollection = defineCollection({
  type: "content",
  schema: z.object({
    tel: z.string(),
    email: z.string(),
    address1: z.string(),
    address2: z.string(),
  }),
});

const disclaimerCollection = defineCollection({
  type: "content",
  schema: z.object({
    text: z.string(),
  }),
});

const opinionsCollection = defineCollection({
  type: "content",
  schema: z.object({
    opinion: z.string(),
    authorName: z.string(),
    authorAge: z.number(),
  }),
});

const pricesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.string(),
    duration: z.string().optional(),
    linkLabel: z.string(),
    link: z.string(),
    image: z.string(),
  }),
});

const coursesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.string(),
    linkLabel: z.string(),
    link: z.string(),
    image: z.string(),
  }),
});

const formationsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    image: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  header: headerCollection,
  pages: pageCollection,
  services: servicesCollection,
  socialMedia: socialMediaCollection,
  contact: contactCollection,
  disclaimer: disclaimerCollection,
  opinions: opinionsCollection,
  prices: pricesCollection,
  courses: coursesCollection,
  formations: formationsCollection,
};
