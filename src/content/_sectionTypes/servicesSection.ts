import { sectionTemplates } from "@src/utils/sectionComponents";
import { z } from "astro:content";

const servicesSectionType = z.object({
  title: z.string(),
  _template: z.literal(sectionTemplates.SERVICES),
});

export default servicesSectionType;
