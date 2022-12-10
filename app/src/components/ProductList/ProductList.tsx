import { productsApi } from "../../redux/api/productsApi";
import ProductItem from "../ProductCard/ProductItem";
import { signInApi, signUpApi } from "../../redux/api/apiTypes/apiTypes";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { basketSlice } from "../../redux/reducers/basketSlice";
import { addUser } from "../../redux/reducers/userSlice";
import { useEffect } from "react";

const ProductList = () => {
  // const {
  //   data: products,
  //   error,
  //   isLoading,
  // } = productsApi.useGetAllProductQuery();

  const [
    signUp,
    { data: signUpData, isSuccess: signUpSuccess, fulfilledTimeStamp },
  ] = productsApi.useSignUpMutation();
  const [signIn, { data: signInData, isSuccess: signInSuccess }] =
    productsApi.useSignInMutation();

  const dispatch = useAppDispatch();

  const signUpHandler = async () => {
    const user: signUpApi = {
      name: "Artem",
      email: "123@mail.ru",
      password: "123456",
      phone: "+791568432115",
    };

    await signUp(user);
    if (signUpData !== undefined) {
      dispatch(addUser(signUpData));
    }
  };

  const signInHandler = async () => {
    const logInUser: signInApi = {
      email: "123@mail.ru",
      password: "123456",
    };
    await signIn(logInUser);
  };

  useEffect(() => {
    if (signInData !== undefined && signInSuccess) {
      dispatch(addUser(signInData));
    }
  }, [signInData, signInSuccess]);

  useEffect(() => {
    if (signUpData !== undefined && signUpSuccess) {
      dispatch(addUser(signUpData));
    }
  }, [signUpData, signUpSuccess]);
  // const basketProducts = useAppSelector((store) => store.basket.basket);

  // const { addProductBasket, removeProductBasket } = basketSlice.actions;
  // const addProductHandler = () => {
  //   const product = {
  //     productId: 1,
  //     count: 1,
  //   };
  //   dispatch(addProductBasket({ ...product }));
  // };

  // const removeProductHandler = () => {
  //   const product = {
  //     productId: 1,
  //     count: 1,
  //   };

  //   dispatch(removeProductBasket({ ...product }));
  // };

  return (
    <div className='products__list'>
      {/* {basketProducts.map((product) => `${product.count}`)}
      <button onClick={addProductHandler}>+</button>
      <button onClick={removeProductHandler}>-</button> */}
      <button onClick={signUpHandler}>SignUp</button>
      <button onClick={signInHandler}>SignIn</button>
      {/* {isLoading && <h1>Идёт загрузка...</h1>} */}
      {/* {error && <h1>Произошла ошибка при загрузке</h1>}
      {products?.map((product) => (
        <ProductItem key={product.productId} product={product} />
      ))} */}
    </div>
  );
};

export default ProductList;
