import { productsApi } from "../../redux/api/productsApi";
import ProductItem from "../ProductCard/ProductItem";
import { signInApi, signUpApi } from "../../redux/api/apiTypes/apiTypes";

const ProductList = () => {
  const {
    data: products,
    error,
    isLoading,
  } = productsApi.useGetAllProductQuery();

  const [signUp, {}] = productsApi.useSignUpMutation();
  const [signIn, {}] = productsApi.useSignInMutation();

  const signUpHandler = async () => {
    const user: signUpApi = {
      name: "Artem",
      email: "123@mail.ru",
      password: "123456",
      phone: "+791568432115",
    };

    await signUp(user);
  };

  const signInHandler = async () => {
    const logInUser: signInApi = {
      email: "123@mail.ru",
      password: "123456",
    };
    await signIn(logInUser);
  };

  return (
    <div className='products__list'>
      <button onClick={signUpHandler}>SignUp</button>
      <button onClick={signInHandler}>SignIn</button>
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>Произошла ошибка при загрузке</h1>}
      {products?.map((product) => (
        <ProductItem key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
