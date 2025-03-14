import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const splittedSectionType = z.object({
  _template: z.literal(sectionTemplates.SPLITTED),
  imageSource: z.string(),
  title: z.string(),
  paragraph: z.string(),
  quotation: z.string().optional(),
  linkLabel: z.string().optional(),
  linkTo: z.string().optional(),
  externalLinkLabel: z.string().optional(),
  externalLinkTo: z.string().optional(),
  isTextOnRight: z.boolean().optional(),
  isButtonAlt: z.boolean().optional(),
  hasFlower: z.boolean().optional(),
  altColor: z.boolean().optional(),
  roundedImage: z.boolean().optional(),
});

export default splittedSectionType;
