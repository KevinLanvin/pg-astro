import ColumnSection from "@src/components/sections/ColumnSection.astro";
import ContactSection from "@src/components/sections/ContactSection.astro";
import DisclaimerSection from "@src/components/sections/DisclaimerSection.astro";
import Hero from "@src/components/sections/Hero.astro";
import IntroductionSection from "@src/components/sections/IntroductionSection.astro";
import OpinionsSection from "@src/components/sections/OpinionsSection.astro";
import PricesSection from "@src/components/sections/PricesSection.astro";
import ServicesSection from "@src/components/sections/ServicesSection.astro";
import SplittedSection from "@src/components/sections/SplittedSection.astro";
import TextSection from "@src/components/sections/TextSection.astro";

export enum sectionTemplates {
  COLUMN = "columnSection",
  CONTACT = "contact",
  DISCLAIMER = "disclaimer",
  HERO = "hero",
  INTRODUCTION = "introduction",
  OPINIONS = "opinions",
  PRICES = "prices",
  SERVICES = "services",
  SPLITTED = "splittedSection",
  TEXT = "text",
}

export const sectionComponents = {
  [sectionTemplates.COLUMN]: ColumnSection,
  [sectionTemplates.CONTACT]: ContactSection,
  [sectionTemplates.DISCLAIMER]: DisclaimerSection,
  [sectionTemplates.HERO]: Hero,
  [sectionTemplates.INTRODUCTION]: IntroductionSection,
  [sectionTemplates.OPINIONS]: OpinionsSection,
  [sectionTemplates.PRICES]: PricesSection,
  [sectionTemplates.SERVICES]: ServicesSection,
  [sectionTemplates.SPLITTED]: SplittedSection,
  [sectionTemplates.TEXT]: TextSection,
};
