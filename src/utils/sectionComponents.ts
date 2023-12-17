import CardsSection from "../components/sections/CardsSection.astro";
import ColumnSection from "../components/sections/ColumnSection.astro";
import ContactSection from "../components/sections/ContactSection.astro";
import CoursesSection from "../components/sections/CoursesSection.astro";
import DisclaimerSection from "../components/sections/DisclaimerSection.astro";
import FlowerSection from "../components/sections/FlowerSection.astro";
import FormationsSection from "../components/sections/FormationsSection.astro";
import Hero from "../components/sections/Hero.astro";
import IntroductionSection from "../components/sections/IntroductionSection.astro";
import OpinionsSection from "../components/sections/OpinionsSection.astro";
import PricesSection from "../components/sections/PricesSection.astro";
import ServicesSection from "../components/sections/ServicesSection.astro";
import SplittedSection from "../components/sections/SplittedSection.astro";
import TextSection from "../components/sections/TextSection.astro";

export enum sectionTemplates {
  CARDS = "cards",
  COLUMN = "columnSection",
  COURSES = "courses",
  CONTACT = "contact",
  DISCLAIMER = "disclaimer",
  FLOWER = "flowerSection",
  FORMATIONS = "formations",
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
  [sectionTemplates.FORMATIONS]: FormationsSection,
  [sectionTemplates.HERO]: Hero,
  [sectionTemplates.INTRODUCTION]: IntroductionSection,
  [sectionTemplates.OPINIONS]: OpinionsSection,
  [sectionTemplates.PRICES]: PricesSection,
  [sectionTemplates.SERVICES]: ServicesSection,
  [sectionTemplates.SPLITTED]: SplittedSection,
  [sectionTemplates.TEXT]: TextSection,
};
