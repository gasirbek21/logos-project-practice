import React, { useContext, useEffect } from "react";
import Contact from "../../components/Contact/Contact";
import { CustomContext } from "../../utils/Context";
import About from "./About/About";
import Filter from "./Filter/Filter";
import Hero from "./Hero/Hero";
import Products from "./Products/Products";

const Home = () => {
  const { getAllProducts } = useContext(CustomContext);
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <Hero />
      <Filter />
      <Products />
      <About />
      <Contact />
    </>
  );
};

export default Home;
