import { productsApi } from "../../redux/api/productsApi";
import ProductItem from "../ProductCard/ProductItem";

const ProductList = () => {
  const {
    data: products,
    error,
    isLoading,
  } = productsApi.useGetAllProductQuery();

  return (
    <div className='products__list'>
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {products?.map((product) => (
        <ProductItem key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
