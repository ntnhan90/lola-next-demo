import { Product } from "@/app/types/product";

const product : Product = {
  id: 1,
  slug: "classic-round",
  name: "Classic Round",
  price: 39,

  attributeSets: [
    {
      id: "size",
      title: "Choose Size",
      displayType: "text",

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
      ],
    },
  ],
};

export default product;