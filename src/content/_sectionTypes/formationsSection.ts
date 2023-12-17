import { sectionTemplates } from "~/utils/sectionComponents";
import { z } from "astro:content";

const formationsSectionType = z.object({
  title: z.string(),
  _template: z.literal(sectionTemplates.FORMATIONS),
});

export default formationsSectionType;
