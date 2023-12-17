import { sectionTemplates } from "../../utils/sectionComponents";
import { z } from "astro:content";

const pricesSectionType = z.object({
  _template: z.literal(sectionTemplates.PRICES),
  title: z.string(),
});

export default pricesSectionType;
