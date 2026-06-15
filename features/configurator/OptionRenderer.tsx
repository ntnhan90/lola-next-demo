"use client";

import type { ComponentType } from "react";

import TextCard from "./cards/TextCard";
import ColorCard from "./cards/ColorCard";
import ImageCard from "./cards/ImageCard";

import type { DisplayType } from "@/types/product";
import type { OptionRendererProps } from "./types";

const cardMap: Record<
  DisplayType,
  ComponentType<OptionRendererProps>
> = {
  text: TextCard,
  color: ColorCard,
  image: ImageCard,
};

export default function OptionRenderer(props: OptionRendererProps) {
  const Card = cardMap[props.type];

  return <Card {...props} />;
}