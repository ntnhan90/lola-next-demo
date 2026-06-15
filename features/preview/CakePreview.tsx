"use client";

import CakeBase from "./layers/CakeBase";
import Frosting from "./layers/Frosting";
import Shadow from "./layers/Shadow";

import "./preview.scss";

export default function CakePreview() {
  return (
    <div className="cake-preview">
      <Shadow />
      <CakeBase />
      <Frosting />
    </div>
  );
}