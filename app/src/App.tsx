import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import { useAppDispatch } from "./hooks/hooks";
import { productsSlice } from "./redux/reducers/productsSlice";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: blue;
  padding: 0;
`;

const AppWraper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: black;
  color: white;
`;
function App() {
  const { addProducts } = productsSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <AppWraper>
      <Header />
      <ProductList />
    </AppWraper>
  );
}

export default App;
