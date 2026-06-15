import { DisplayType, ProductOption } from "@/app/types/product";

export interface OptionRendererProps {
  type: DisplayType;
  option: ProductOption;
  attributeSetId: string;
}