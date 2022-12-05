import { apiSlice } from "../../redux/api/apiSlice";

const ProductCard = () => {
  const { data: products } = apiSlice.useLogInUserQuery("");

  return (
    <div>
      <div className='post__list'>{}</div>
    </div>
  );
};

export default ProductCard;
