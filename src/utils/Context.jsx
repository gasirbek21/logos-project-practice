import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CustomContext = createContext();

export const Context = (props) => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  const [user, setUser] = useState({
    email: "",
  });

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const getAllProducts = () => {
    axios("http://localhost:8080/products")
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err));
  };

  const value = {
    user,
    setUser,
    getAllProducts,
    products,
    setProducts,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
