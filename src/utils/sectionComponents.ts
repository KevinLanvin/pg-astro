import Hero from "@src/components/sections/Hero.astro";
import SplittedSection from "@src/components/sections/SplittedSection.astro";

export enum sectionTemplates {
  HERO = "hero",
  SPLITTED = "splittedSection",
}

export const sectionComponents = {
  [sectionTemplates.HERO]: Hero,
  [sectionTemplates.SPLITTED]: SplittedSection,
};
