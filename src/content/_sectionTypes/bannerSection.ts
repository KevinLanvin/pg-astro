import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const bannerSectionType = z.object({
  _template: z.literal(sectionTemplates.BANNER),
  suptitle: z.string(),
  title: z.string(),
  heroSubtitle: z.string(),
  button1Label: z.string(),
  button1To: z.string().optional(),
  button1Link: z.string().optional(),
  button2Label: z.string().optional(),
  button2To: z.string().optional(),
  button2Link: z.string().optional(),
  background: z.string(),
});

export default bannerSectionType;