import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const heroSectionType = z.object({
  _template: z.literal(sectionTemplates.HERO),
  suptitle: z.string(),
  title: z.string(),
  heroSubtitle: z.string(),
  button1Label: z.string(),
  button1To: z.string().optional(),
  button1Link: z.string().optional(),
  button2Label: z.string(),
  button2To: z.string().optional(),
  button2Link: z.string().optional(),
  background: z.string(),
});

export default heroSectionType;
