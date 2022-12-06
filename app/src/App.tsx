import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import { useAppDispatch } from "./hooks/hooks";
import { productsSlice } from "./redux/reducers/productsSlice";

function App() {
  const { addProducts } = productsSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div className='container'>
      <h1>HEADER</h1>
      <ProductList />
    </div>
  );
}

export default App;
