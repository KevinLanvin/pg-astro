import { sectionTemplates } from "@src/utils/sectionComponents";
import { z } from "astro:content";

const splittedSectionType = z.object({
  imageSource: z.string(),
  title: z.string(),
  paragraph: z.string(),
  quotation: z.string().optional(),
  linkLabel: z.string().optional(),
  linkTo: z.string().optional(),
  isTextOnRight: z.boolean().optional(),
  isButtonAlt: z.boolean().optional(),
  hasFlower: z.boolean().optional(),
  altColor: z.boolean().optional(),
  roundedImage: z.boolean().optional(),
  _template: z.literal(sectionTemplates.SPLITTED),
});

export default splittedSectionType;
