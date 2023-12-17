import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const introductionSectionType = z.object({
  _template: z.literal(sectionTemplates.INTRODUCTION),
  title: z.string(),
  description: z.string().optional(),
  banner: z.string().optional(),
  bannerAlt: z.string().optional(),
  quotation: z.string().optional(),
});

export default introductionSectionType;
