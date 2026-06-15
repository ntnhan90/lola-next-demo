"use client";

import { usePrice } from "@/hooks/usePrice";
import ConfigurationSummary from "./ConfigurationSummary";

export default function Sidebar() {
  const price = usePrice();

  return (
    <aside className="sidebar-panel">
      <h3>Classic Round</h3>

      <p className="text-muted mb-4">
        Customize your cake and review your order.
      </p>

      <ConfigurationSummary />

      <hr />

      <div className="price-row">
        <span>Base</span>
        <span>${price.basePrice}</span>
      </div>

      <div className="price-row">
        <span>Extras</span>
        <span>${price.extras}</span>
      </div>

      <hr />

      <div className="price-total">
        <span>Total</span>
        <strong>${price.total}</strong>
      </div>

      <button className="btn btn-warning w-100 mt-4">
        Add To Cart
      </button>
    </aside>
  );
}