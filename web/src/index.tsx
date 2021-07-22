import React from "react";
import { CookiesProvider } from "react-cookie";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
const link = createHttpLink({
  uri: "/api/graphql",
  credentials: "same-origin",
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <CookiesProvider>
      <Router>
        <App />
      </Router>
    </CookiesProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
