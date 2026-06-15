import type { Product } from "@/types/product";

const product: Product = {
  id: 1,
  slug: "classic",
  name: "Classic Round",
  price: 39,

  attributeSets: [
    {
      id: "size",
      title: "Choose Size",
      displayType: "text",
      selectionType: "single",
      options: [
        { id: "classic", label: "Classic", value: "classic", price: 0 },
        { id: "heart", label: "Heart", value: "heart", price: 5 },
      ],
    },
    {
      id: "color",
      title: "Frosting Color",
      displayType: "color",
      selectionType: "single",
      options: [
        { id: "yellow", label: "Yellow", value: "yellow", color: "#ffcb00" },
        { id: "pink", label: "Pink", value: "pink", color: "#ff89c9" },
        { id: "green", label: "Green", value: "green", color: "#71d86d" },
      ],
    },
    {
      id: "border",
      title: "Border",
      displayType: "image",
      selectionType: "single",
      options: [
        {
          id: "white",
          label: "White",
          value: "white-border",
          image: "/assets/cakes/classic/border/white-border.png",
        },
        {
          id: "gold",
          label: "Gold",
          value: "gold-border",
          image: "/assets/cakes/classic/border/gold-border.png",
        },
      ],
    },
    {
      id: "toppings",
      title: "Toppings",
      displayType: "image",
      selectionType: "multiple",
      options: [
        {
          id: "rainbow",
          label: "Rainbow",
          value: "rainbow-sprinkles",
          image: "/assets/cakes/classic/sprinkles/rainbow-sprinkles.png",
        },
      ],
    },
  ],
};

export default product;