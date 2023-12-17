import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const textSectionType = z.object({
  _template: z.literal(sectionTemplates.TEXT),
  title: z.string(),
  paragraph: z.string(),
});

export default textSectionType;
