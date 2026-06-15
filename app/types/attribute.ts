export type OptionType =
  | "text"
  | "color"
  | "image";

export interface AttributeOption {
  id: string;
  label: string;
  value: string;

  price?: number;

  color?: string;

  image?: string;
}

export interface Attribute {

  id: string;

  title: string;

  type: OptionType;

  options: AttributeOption[];
}