"use client";

import { useConfigurationSummary } from "@/hooks/useConfigurationSummary";

export default function ConfigurationSummary() {
  const items = useConfigurationSummary();

  if (!items.length) {
    return (
      <div className="config-summary">
        <p className="config-summary__empty">
          No options selected yet.
        </p>
      </div>
    );
  }

  return (
    <div className="config-summary">
      <h5>Your Cake</h5>

      {items.map((item) => (
        <div
          className="config-summary__item"
          key={item.attributeSetId}
        >
          <span>{item.title}</span>

          <strong>{item.values.join(", ")}</strong>
        </div>
      ))}
    </div>
  );
}