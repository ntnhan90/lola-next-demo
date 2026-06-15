import OptionCard from "../cards/OptionCard";

type Props = {

  text: string;

  active?: boolean;

  onClick?: () => void;
};

export default function TextCard({
  text,
  active,
  onClick,
}: Props) {
  return (
    <OptionCard
      active={active}
      onClick={onClick}
    >
      {text}
    </OptionCard>
  );
}