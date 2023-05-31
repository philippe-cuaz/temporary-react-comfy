import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Auth0:
// Name:
// Comfy Store
// Domain:
// dev-caibjkvnoki8v4ja.eu.auth0.com
// Client ID:
// ttqSqdPJ3EaQmGYTux7XX8b1DxCYT4PV

root.render(
  <Auth0Provider
  // domain="dev-caibjkvnoki8v4ja.eu.auth0.com"
  // clientId="ttqSqdPJ3EaQmGYTux7XX8b1DxCYT4PV"
  domain={process.env.REACT_APP_AUTH_DOMAIN}
  clientId={process.env.REACT_APP_AUTH_CLIENT_ID}
  authorizationParams={{
    redirect_url:window.location.origin
  }}>
  <UserProvider>
  <ProductsProvider>
  <FilterProvider>
  <CartProvider>
    <App/>
  </CartProvider>
 
  </FilterProvider>
  </ProductsProvider>
   </UserProvider>
  </Auth0Provider>
);
