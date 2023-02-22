import React from "react";
import Narbar from "../../components/Narbar/Narbar"
import Carts from "../../components/carts/Carts";
import Form from "../../components/form/Form";
import Newfim from "../../components/newfim/Newfim";
import Cartwifi from "../../components/cartwifi/Cartwifi";

function Home({ dataCart }) {
    return (
        <>
            <Narbar />
            <Carts dataCart={ dataCart } />
            <Newfim />
            <Cartwifi />
            <Form />
        </>
    );
}

export default Home;
