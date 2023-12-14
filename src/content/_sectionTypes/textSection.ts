import { sectionTemplates } from "@src/utils/sectionComponents";
import { z } from "astro:content";

const textSectionType = z.object({
  title: z.string(),
  paragraph: z.string(),
  _template: z.literal(sectionTemplates.TEXT),
});

export default textSectionType;
