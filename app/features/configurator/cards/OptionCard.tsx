type Props = {
  active?: boolean;

  children: React.ReactNode;

  onClick?: () => void;
};

export default function OptionCard({
  children,
  active,
  onClick,
}: Props) {
  return (
    <button
      className={`option-card ${
        active ? "active" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}