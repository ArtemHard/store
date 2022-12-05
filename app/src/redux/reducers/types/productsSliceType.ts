export interface ProductsSliceType {
  products: [productType] | [];
}

export interface productType {
  productId: number;
  title: string;
  description: string;
  img: string[];
  count: number;
  additionalParams: additionalParamsType;
}

interface additionalParamsType {
  color: string;
  flowers: string[];
  equipment: string[]; // комплектация: что входит
  size: string;
  weight: string;
}
