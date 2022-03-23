import React from 'react';
import { Footer } from '../footer/Footer';
import { NavBar } from '../navBar/NavBar';

export const Layout = ({children}) => {
  return (
    <>
      <NavBar />
      {
        children
      }
      <Footer/>
    </>
  )
}