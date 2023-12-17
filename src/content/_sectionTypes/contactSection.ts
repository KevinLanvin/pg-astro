import { sectionTemplates } from "~/utils/sectionComponents";
import { z } from "astro:content";

const contactSectionType = z.object({
  title: z.string(),
  image: z.string(),
  _template: z.literal(sectionTemplates.CONTACT),
});

export default contactSectionType;
