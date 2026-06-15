import { DisplayType, ProductOption,SelectionType } from "@/types/product";

export interface OptionRendererProps {
  type: DisplayType;
  option: ProductOption;
  attributeSetId: string;
  selectionType?: SelectionType;
}