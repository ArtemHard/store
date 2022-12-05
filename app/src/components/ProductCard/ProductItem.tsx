import { FC } from "react";
import { productType } from "../../redux/reducers/types/productsSliceType";

interface ProductCardPropsTypes {
  product: productType;
}
const ProductItem: FC<ProductCardPropsTypes> = ({ product }) => {
  return (
    <div className='product'>
      {product.title}.{product.description}.{product.count}
    </div>
  );
};

export default ProductItem;
