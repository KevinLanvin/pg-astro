import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const coursesSectionType = z.object({
  _template: z.literal(sectionTemplates.COURSES),
  title: z.string(),
});

export default coursesSectionType;
