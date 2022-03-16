import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "../Components/home/Home";
import { ItemListContainer } from "../Components/Item/ItemListContainer";
import { Layout } from "../Components/layout/Layout";

export const PublicRoutes = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/categories/:category" element={<ItemListContainer />} />       
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  )
}