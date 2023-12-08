import { sectionTemplates } from "@src/utils/sectionComponents";
import { z } from "astro:content";

const opinionsSectionType = z.object({
  title: z.string(),
  background: z.string(),
  _template: z.literal(sectionTemplates.OPINIONS),
});

export default opinionsSectionType;
