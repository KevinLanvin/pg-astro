import { sectionTemplates } from "@src/utils/sectionComponents";
import { z } from "astro:content";

const cardsSectionType = z.object({
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
  _template: z.literal(sectionTemplates.CARDS),
});

export default cardsSectionType;
