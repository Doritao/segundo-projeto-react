import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/globalStyle";
import App from './App'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App /> <GlobalStyle />
  </>
);
//ReactDOM.render(<App />, document.getElementById("root"));
