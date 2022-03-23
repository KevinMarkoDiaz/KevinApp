import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Cart } from "../Components/cart/Cart";
import { ItemDetailContainer } from "../Components/detail/ItemDetailContainer";
import { Home } from "../Components/home/Home";
import { ItemListContainer } from "../Components/Item/ItemListContainer";
import { Layout } from "../Components/layout/Layout";

export const PublicRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories/:category" element={<ItemListContainer />} />       
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />       
        </Routes>
      </Layout>
    </Router>
  )
}