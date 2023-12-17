import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const flowerSectionType = z.object({
  _template: z.literal(sectionTemplates.FLOWER),
  title: z.string(),
  paragraph: z.string(),
});

export default flowerSectionType;
