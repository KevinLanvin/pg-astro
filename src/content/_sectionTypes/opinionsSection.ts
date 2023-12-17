import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const opinionsSectionType = z.object({
  _template: z.literal(sectionTemplates.OPINIONS),
  title: z.string(),
  background: z.string(),
});

export default opinionsSectionType;
