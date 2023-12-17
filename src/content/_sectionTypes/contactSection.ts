import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const contactSectionType = z.object({
  _template: z.literal(sectionTemplates.CONTACT),
  title: z.string(),
  image: z.string(),
});

export default contactSectionType;
