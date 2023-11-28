import { sectionTemplates } from "@src/utils/sectionComponents";
import { z } from "astro:content";

const heroSectionType = z.object({
  suptitle: z.string(),
  title: z.string(),
  buttonLabel: z.string(),
  background: z.string(),
  _template: z.literal(sectionTemplates.HERO),
});

export default heroSectionType;
