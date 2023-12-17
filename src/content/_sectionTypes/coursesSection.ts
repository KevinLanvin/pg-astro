import { sectionTemplates } from "~/utils/sectionComponents";
import { z } from "astro:content";

const coursesSectionType = z.object({
  title: z.string(),
  _template: z.literal(sectionTemplates.COURSES),
});

export default coursesSectionType;
