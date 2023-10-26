import Hero from "../components/Hero.astro";

export enum sectionTemplates {
  HERO = "hero",
}

export const sectionComponents = {
  [sectionTemplates.HERO]: Hero,
};
