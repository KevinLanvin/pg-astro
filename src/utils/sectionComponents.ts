import ContactSection from "@src/components/sections/ContactSection.astro";
import Hero from "@src/components/sections/Hero.astro";
import OpinionsSection from "@src/components/sections/OpinionsSection.astro";
import ServicesSection from "@src/components/sections/ServicesSection.astro";
import SplittedSection from "@src/components/sections/SplittedSection.astro";

export enum sectionTemplates {
  CONTACT = "contact",
  HERO = "hero",
  SERVICES = "services",
  SPLITTED = "splittedSection",
  OPINIONS = "opinions",
}

export const sectionComponents = {
  [sectionTemplates.CONTACT]: ContactSection,
  [sectionTemplates.HERO]: Hero,
  [sectionTemplates.SERVICES]: ServicesSection,
  [sectionTemplates.SPLITTED]: SplittedSection,
  [sectionTemplates.OPINIONS]: OpinionsSection,
};
