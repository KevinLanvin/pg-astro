import { sectionTemplates } from "~/utils/sectionComponents";
import { z } from "astro:content";

const disclaimerSectionType = z.object({
  title: z.string(),
  _template: z.literal(sectionTemplates.DISCLAIMER),
});

export default disclaimerSectionType;
