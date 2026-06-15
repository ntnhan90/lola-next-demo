"use client";

import { AttributeSet } from "@/app/types/product";

import OptionRenderer from "./OptionRenderer";

export default function AttributeGroup({
  attributeSet,
}: {
  attributeSet: AttributeSet;
}) {
  return (
    <section className="attribute-group">

      <h5>{attributeSet.title}</h5>

      <div className="option-grid">

        {attributeSet.options.map((option) => (
          <OptionRenderer
            key={option.id}
            type={attributeSet.displayType}
            option={option}
            attributeSetId={attributeSet.id}
          />
        ))}

      </div>

    </section>
  );
}