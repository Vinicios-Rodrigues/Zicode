import ReactDOM from "react-dom";

import App from "./App";
import GlobalStyle from "./globalStyles";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  rootElement
);
