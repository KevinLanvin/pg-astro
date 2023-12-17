import { sectionTemplates } from "~/utils/sectionComponents";
import { z } from "astro:content";

const pricesSectionType = z.object({
  title: z.string(),
  _template: z.literal(sectionTemplates.PRICES),
});

export default pricesSectionType;
