import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import { useAppDispatch } from "./hooks/hooks";
import { productsSlice } from "./redux/reducers/productsSlice";

function App() {
  const { addProducts } = productsSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <>
      <Header />
      <ProductList />
    </>
  );
}

export default App;
