import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/globalStyle";
import App from './containers/orders'
import Routes from './routes'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Routes /> <GlobalStyle />
  </>
);
//ReactDOM.render(<App />, document.getElementById("root"));
