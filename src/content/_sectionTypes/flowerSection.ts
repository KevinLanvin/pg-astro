import { sectionTemplates } from "@src/utils/sectionComponents";
import { z } from "astro:content";

const flowerSectionType = z.object({
  title: z.string(),
  paragraph: z.string(),
  _template: z.literal(sectionTemplates.FLOWER),
});

export default flowerSectionType;
