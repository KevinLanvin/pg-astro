import { z } from "astro:content";

const testSectionType: object = z.object({
  title: z.string(),
  body: z.string(),
  _template: z.string(),
});

export default testSectionType;
