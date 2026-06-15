import { Attribute } from "../types/attribute";

export const attributes: Attribute[] = [
  {
    id: "size",
    title: "Choose Size",

    type: "text",

    options: [
      {
        id: "classic",

        label: "Classic",

        value: "classic",

        price: 0,
      },

      {
        id: "heart",

        label: "Heart",

        value: "heart",

        price: 5,
      },

      {
        id: "mini",

        label: "Mini",

        value: "mini",

        price: -5,
      },
    ],
  },

  {
    id: "color",

    title: "Frosting Color",

    type: "color",

    options: [
      {
        id: "yellow",

        label: "Yellow",

        value: "yellow",

        color: "#ffcb00",
      },

      {
        id: "pink",

        label: "Pink",

        value: "pink",

        color: "#ff7ac6",
      },

      {
        id: "green",

        label: "Green",

        value: "green",

        color: "#5fd96a",
      },
    ],
  },
];