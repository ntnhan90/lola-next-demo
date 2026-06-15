"use client";

import { useCake } from "@/hooks/useCake";

export default function Sidebar() {
  const { state } = useCake();

  return (
    <aside className="sidebar-panel">
      <h3>{state.size}</h3>

      <p>{state.base}</p>

      <p>{state.flavor}</p>

      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: state.color,
        }}
      />

      <button className="btn btn-warning mt-4 w-100">
        Add to Cart
      </button>
    </aside>
  );
}