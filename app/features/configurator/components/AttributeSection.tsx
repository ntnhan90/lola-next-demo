import { Attribute } from "@/app/types/attribute";

type Props = {

  attribute: Attribute;
};

export default function AttributeSection({
  attribute,
}: Props) {
  return (
    <section className="attribute-section">

      <h5>{attribute.title}</h5>

      <div className="option-grid">

        {/* render options */}

      </div>

    </section>
  );
}