import React from 'react';
import { Banner } from '../banner/Banner';
import { Footer } from '../footer/Footer';
import { NavBar } from '../navBar/NavBar';
import "./Layout.css";

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Banner />
      <div className='layou-body'>
        {
          children
        }
      </div>
      <Footer />
    </>
  )
}