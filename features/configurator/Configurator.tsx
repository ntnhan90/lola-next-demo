"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { getProduct } from "@/services/productService";

import AttributeGroup from "./AttributeGroup";

export default function Configurator() {
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    getProduct().then(setProduct);
  }, []);

  if (!product) return null;

  return (
    <div className="configurator">

      {product.attributeSets.map((item) => (
        <AttributeGroup
          key={item.id}
          attributeSet={item}
        />
      ))}

    </div>
  );
}