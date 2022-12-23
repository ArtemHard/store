import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux/store";
import { GlobalStyle } from "./styles/global";
import { RouterProvider } from "react-router-dom";
import router from "./router";
// import { ThemeProvider } from 'styled-components'
// import { theme } from "./styles/theme";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider theme={theme}> */}
      <GlobalStyle />
      <RouterProvider router={router} />
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>
);
