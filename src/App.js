import "./App.css";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Login from "./components/login/Login";
import Home from "./pages/Homepage/Home";
import Sign from "./components/sign/Sign";
import Resetemail from "./components/resetemail/Resetemail";
import FromChiTiet from "./components/formchitiet/FormChiTiet";
function App() {
  const [dataCart, setDataCart] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/listproduct")
      .then((dataListProduct) => setDataCart(dataListProduct.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home dataCart={dataCart} />} />
        <Route path='/detail' element={<FromChiTiet />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign />} />
        <Route path='/resetemail' element={<Resetemail />} />
      </Routes>
    </>
  );
}

export default App;

<></>;
