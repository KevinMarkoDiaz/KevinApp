import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginForm from "../Components/auth/LoginForm";
import RegisterForm from "../Components/auth/RegisterForm";
import { Cart } from "../Components/cart/Cart";
import { ItemDetailContainer } from "../Components/detail/ItemDetailContainer";
import { Home } from "../Components/home/Home";
import { ItemListContainer } from "../Components/Item/ItemListContainer";
import { Layout } from "../Components/layout/Layout";
import { Sale } from "../Components/sale/Sale";

export const RouterApp = () => {

  const localUid = window.localStorage.getItem('user');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout children={<Home />} />} />
        <Route path="/cart" element={<Layout children={<Cart />} />} />
        <Route path="/categories/:category" element={<Layout children={<ItemListContainer />} />} />
        <Route path="/item/:itemId" element={<Layout children={<ItemDetailContainer />} />} />
        <Route path="/auth/register" element={<RegisterForm />} />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="/sale" element={(!localUid) ? <Navigate to="/" /> : <Sale />} />
      </Routes>
    </Router>
  )
}