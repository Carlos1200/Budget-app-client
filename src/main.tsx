import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";
import client from "./Apollo";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
