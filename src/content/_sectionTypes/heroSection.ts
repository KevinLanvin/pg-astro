import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const heroSectionType = z.object({
  _template: z.literal(sectionTemplates.HERO),
  suptitle: z.string(),
  title: z.string(),
  buttonLabel: z.string(),
  background: z.string(),
});

export default heroSectionType;
