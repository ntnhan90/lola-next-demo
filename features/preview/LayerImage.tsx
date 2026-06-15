"use client";

import Image from "next/image";

interface LayerImageProps {
  src: string;
  alt: string;
  zIndex: number;
}

export default function LayerImage({
  src,
  alt,
  zIndex,
}: LayerImageProps) {
  return (
    <div
      className="layer-image"
      style={{ zIndex }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="500px"
        style={{
          objectFit: "contain",
          pointerEvents: "none",
          userSelect: "none",
        }}
      />
    </div>
  );
}