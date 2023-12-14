import CardsSection from "@src/components/sections/CardsSection.astro";
import ColumnSection from "@src/components/sections/ColumnSection.astro";
import ContactSection from "@src/components/sections/ContactSection.astro";
import CoursesSection from "@src/components/sections/CoursesSection.astro";
import DisclaimerSection from "@src/components/sections/DisclaimerSection.astro";
import FlowerSection from "@src/components/sections/FlowerSection.astro";
import Hero from "@src/components/sections/Hero.astro";
import IntroductionSection from "@src/components/sections/IntroductionSection.astro";
import OpinionsSection from "@src/components/sections/OpinionsSection.astro";
import PricesSection from "@src/components/sections/PricesSection.astro";
import ServicesSection from "@src/components/sections/ServicesSection.astro";
import SplittedSection from "@src/components/sections/SplittedSection.astro";
import TextSection from "@src/components/sections/TextSection.astro";

export enum sectionTemplates {
  CARDS = "cards",
  COLUMN = "columnSection",
  COURSES = "courses",
  CONTACT = "contact",
  DISCLAIMER = "disclaimer",
  FLOWER = "flowerSection",
  HERO = "hero",
  INTRODUCTION = "introduction",
  OPINIONS = "opinions",
  PRICES = "prices",
  SERVICES = "services",
  SPLITTED = "splittedSection",
  TEXT = "text",
}

export const sectionComponents = {
  [sectionTemplates.CARDS]: CardsSection,
  [sectionTemplates.COLUMN]: ColumnSection,
  [sectionTemplates.CONTACT]: ContactSection,
  [sectionTemplates.COURSES]: CoursesSection,
  [sectionTemplates.DISCLAIMER]: DisclaimerSection,
  [sectionTemplates.FLOWER]: FlowerSection,
  [sectionTemplates.HERO]: Hero,
  [sectionTemplates.INTRODUCTION]: IntroductionSection,
  [sectionTemplates.OPINIONS]: OpinionsSection,
  [sectionTemplates.PRICES]: PricesSection,
  [sectionTemplates.SERVICES]: ServicesSection,
  [sectionTemplates.SPLITTED]: SplittedSection,
  [sectionTemplates.TEXT]: TextSection,
};
