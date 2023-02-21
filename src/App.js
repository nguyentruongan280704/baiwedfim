
import './App.css';
import Narbar from './components/Narbar/Narbar';
import Carts from './components/carts/Carts';
import Form from './components/form/Form';
import Newfim from './components/newfim/Newfim';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
function App() {
  const [dataCart, setDataCart] = useState([])
  const [tudoCart, setTudoCart] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:3000/listproduct")
      .then((dataListProduct) => setDataCart(dataListProduct.data))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/listproduct")
      .then((dataListProduct) => setTudoCart(dataListProduct.data))
      .catch((err) => console.log(err));
  }, []);
  return (  
    <>
  <Narbar/>
  <Carts
   dataCart={dataCart}/>
   <Newfim
  tudoCart={tudoCart}
  />
  <Form/>
    </>
  );
}

export default App;

<>
</>