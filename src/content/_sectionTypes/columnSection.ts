import { sectionTemplates } from "@src/utils/sectionComponents";
import { z } from "astro:content";

const columnSectionType = z.object({
  title: z.string(),
  leftColumn: z.string(),
  rightColumn: z.string(),
  link: z.string().optional(),
  linkLabel: z.string().optional(),
  _template: z.literal(sectionTemplates.COLUMN),
});

export default columnSectionType;
