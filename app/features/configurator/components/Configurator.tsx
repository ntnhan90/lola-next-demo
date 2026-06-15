import { attributes } from "@/app/mock/attributes";

import AttributeSection from "./AttributeSection";

export default function Configurator() {
  return (
    <div className="configurator">

      {attributes.map((attribute) => (
        <AttributeSection
          key={attribute.id}
          attribute={attribute}
        />
      ))}

    </div>
  );
}