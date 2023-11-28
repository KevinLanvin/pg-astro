import Hero from "@src/components/sections/Hero.astro";
import ServicesSection from "@src/components/sections/ServicesSection.astro";
import SplittedSection from "@src/components/sections/SplittedSection.astro";

export enum sectionTemplates {
  HERO = "hero",
  SERVICES = "services",
  SPLITTED = "splittedSection",
}

export const sectionComponents = {
  [sectionTemplates.HERO]: Hero,
  [sectionTemplates.SERVICES]: ServicesSection,
  [sectionTemplates.SPLITTED]: SplittedSection,
};
