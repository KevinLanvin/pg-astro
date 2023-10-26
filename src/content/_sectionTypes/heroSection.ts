import { z } from "astro:content";

const heroSectionType: object = z.object({
  title: z.string(),
  buttonLabel: z.string(),
  background: z.string(),
  _template: z.string(),
});

export default heroSectionType;
