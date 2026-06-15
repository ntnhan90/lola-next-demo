"use client";

import TextCard from "./cards/TextCard";
import ColorCard from "./cards/ColorCard";
import ImageCard from "./cards/ImageCard";
import { OptionRendererProps } from "./types";

const map = {
  text: TextCard,
  color: ColorCard,
  image: ImageCard,
};

export default function OptionRenderer(props: OptionRendererProps) {
  const Card =
    map[props.type as keyof typeof map];

  return <Card {...props} />;
}