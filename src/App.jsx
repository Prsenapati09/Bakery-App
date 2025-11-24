import Product from "./component/Product";
import Contact from "./component/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Random from "./component/Random";
import OurStory from "./component/OurStory";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Premium from './component/Premium'
import Category from "./component/Category";
import Footer from "./component/Footer";
import AOS from 'aos'
import 'aos/dist/aos.css';

import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // whether animation should happen only once
      easing: 'ease-in-out',
    });
  }, []);

  const router = createBrowserRouter([
    { 
      path: "/",
      element:
      <>
      <Navbar/>
      <Hero/>
      <Footer/>
      </>
    },
    {
      path: "/Product",
      element:
      <>
      <Navbar/>
       <Product />
       <Footer/>
      </>
    },
    {
      path: "/Contact",
      element:
      <>
      <Navbar/>
       <Contact />
       <Footer/>
      </>
    },
    {
      path:"/About",
      element:
      <>
      <Navbar/>
      <OurStory/>
      <Footer/>
      </>
    },
    {
      path:"/Premium",
      element:
      <>
      <Navbar/>
      <Premium/>
      <Footer/>
      </>
    },
    {
      path:"/Product",
      element:
      <>
      <Navbar/>
      <Product/>
      <Footer/>
      </>
    },
    {
      path:"/Category",
      element:
      <>
      <Navbar/>
      <Category/>
      <Footer/>
      </>
    },
    {
      path: "*",
      element: <Random />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
