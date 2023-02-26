import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Basket from "./pages/Basket/Basket";
import Catalog from "./pages/Catalog/Catalog";
import Delivery from "./pages/Delivery/Delivery";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Register from "./pages/Register/Register";
import Sales from "./pages/Sales/Sales";
import "./styles/global.scss";

function App() {
    return (
        <>
            <Routes>
                <Route path={""} element={<Layout />}>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/sales"} element={<Sales />} />
                    <Route path={"/delivery"} element={<Delivery />} />
                    <Route path={"/basket"} element={<Basket />} />
                    <Route path={"/catalog/:category"} element={<Catalog />} />
                    <Route path={"/product/:id"} element={<Product />} />
                    {/* <Route path={"/product/add"} element={<AddProduct />} /> */}
                    <Route path={"/orders"} element={<Orders />} />
                </Route>
                <Route path={"register"} element={<Register />} />
                <Route path={"login"} element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
