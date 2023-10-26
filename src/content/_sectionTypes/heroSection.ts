import { z } from "astro:content";

const heroSectionType: object = z.object({
  suptitle: z.string(),
  title: z.string(),
  buttonLabel: z.string(),
  background: z.string(),
  _template: z.string(),
});

export default heroSectionType;
