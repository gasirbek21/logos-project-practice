import React, { useContext, useEffect } from "react";
import { CustomContext } from "../../utils/Context";
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
    </>
  );
};

export default Home;
