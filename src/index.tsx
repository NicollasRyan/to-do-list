import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./styles/global";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    tasks: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/tasks", () => {
      return this.schema.all("tasks");
    });

    this.post("/tasks", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("tasks", data);
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
