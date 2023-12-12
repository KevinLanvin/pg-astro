import ContactSection from "@src/components/sections/ContactSection.astro";
import DisclaimerSection from "@src/components/sections/DisclaimerSection.astro";
import Hero from "@src/components/sections/Hero.astro";
import OpinionsSection from "@src/components/sections/OpinionsSection.astro";
import ServicesSection from "@src/components/sections/ServicesSection.astro";
import SplittedSection from "@src/components/sections/SplittedSection.astro";

export enum sectionTemplates {
  CONTACT = "contact",
  DISCLAIMER = "disclaimer",
  HERO = "hero",
  OPINIONS = "opinions",
  SERVICES = "services",
  SPLITTED = "splittedSection",
}

export const sectionComponents = {
  [sectionTemplates.CONTACT]: ContactSection,
  [sectionTemplates.DISCLAIMER]: DisclaimerSection,
  [sectionTemplates.HERO]: Hero,
  [sectionTemplates.SERVICES]: ServicesSection,
  [sectionTemplates.SPLITTED]: SplittedSection,
  [sectionTemplates.OPINIONS]: OpinionsSection,
};
