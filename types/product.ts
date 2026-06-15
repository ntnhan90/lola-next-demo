export interface ProductOption {
  id: string;
  label: string;
  value: string;

  color?: string;

  image?: string;

  price?: number;
}

export interface AttributeSet {
  id: string;

  title: string;

  displayType: DisplayType;
  selectionType?: SelectionType;
  options: ProductOption[];
}

export interface Product {
  id: number;

  slug: string;

  name: string;

  price: number;

  attributeSets: AttributeSet[];
}

export type DisplayType = "text" | "color" | "image";

export interface ProductOption {

  id: string;

  label: string;

  value: string;

  color?: string;

  image?: string;

  price?: number;

}

export type SelectionType =
  | "single"
  | "multiple";

