import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const formationsSectionType = z.object({
  _template: z.literal(sectionTemplates.FORMATIONS),
  title: z.string(),
});

export default formationsSectionType;
