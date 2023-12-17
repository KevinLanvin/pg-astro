import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const columnSectionType = z.object({
  _template: z.literal(sectionTemplates.COLUMN),
  title: z.string(),
  leftColumn: z.string(),
  rightColumn: z.string(),
  link: z.string().optional(),
  linkLabel: z.string().optional(),
});

export default columnSectionType;
