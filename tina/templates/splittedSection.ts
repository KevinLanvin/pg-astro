import type { Template } from "tinacms";

const splitted: Template = {
  name: "splittedSection",
  label: "Image + Texte (+ Bouton + Citation)",
  ui: {
    itemProps: ({ title }) => {
      return { label: title };
    },
  },
  fields: [
    {
      type: "image",
      name: "imageSource",
      required: true,
      label: "Image",
    },
    {
      type: "string",
      name: "title",
      required: true,
      label: "Titre",
    },
    {
      type: "rich-text",
      name: "paragraph",
      required: true,
      label: "Paragraphe",
    },
    {
      type: "string",
      name: "quotation",
      label: "Citation",
      ui: {
        component: "textarea",
        description:
          "Séparer la citation de l'auteur avec un point pour générer un retour à la ligne",
      },
    },
    {
      type: "string",
      name: "linkLabel",
      label: "Label du bouton",
    },
    {
      type: "string",
      name: "linkTo",
      label: "Lien du bouton",
    },
    {
      type: "boolean",
      name: "isTextOnRight",
      label: "Texte à droite",
    },
    {
      type: "boolean",
      name: "isButtonAlt",
      label: "Couleurs du bouton inversées",
    },
    {
      type: "boolean",
      name: "hasFlower",
      label: "Encadré avec la fleur",
    },
    {
      type: "boolean",
      name: "altColor",
      label: "Couleurs alternatives",
    },
    {
      type: "boolean",
      name: "roundedImage",
      label: "Image ronde",
    },
  ],
};

export default splitted;
