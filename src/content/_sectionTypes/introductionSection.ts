import { sectionTemplates } from "@src/utils/sectionComponents";
import { z } from "astro:content";

const introductionSectionType = z.object({
  title: z.string(),
  description: z.string().optional(),
  banner: z.string().optional(),
  bannerAlt: z.string().optional(),
  quotation: z.string().optional(),
  _template: z.literal(sectionTemplates.INTRODUCTION),
});

export default introductionSectionType;
