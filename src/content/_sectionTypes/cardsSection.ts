import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const cardsSectionType = z.object({
  _template: z.literal(sectionTemplates.CARDS),
  cards: z.array(
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      content: z.string(),
      link: z.string().optional(),
      linkLabel: z.string().optional(),
      image: z.string(),
    }),
  ),
});

export default cardsSectionType;
