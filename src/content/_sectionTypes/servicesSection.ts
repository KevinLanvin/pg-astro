import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const servicesSectionType = z.object({
  _template: z.literal(sectionTemplates.SERVICES),
  title: z.string(),
});

export default servicesSectionType;
