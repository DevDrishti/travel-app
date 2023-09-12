/*import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();*/

import React from "react";
import ReactDom from "react-dom/client";
import "./index.scss";
import App from "./App";

const rootContainer = document.getElementById("root");

const root = ReactDom.createRoot(rootContainer);

root.render(<App />);
