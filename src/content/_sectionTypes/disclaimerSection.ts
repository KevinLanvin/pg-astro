import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const disclaimerSectionType = z.object({
  _template: z.literal(sectionTemplates.DISCLAIMER),
  title: z.string(),
});

export default disclaimerSectionType;
