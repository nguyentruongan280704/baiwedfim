import "./carts.css";
import React from "react";

function Carts(props) {
    let {
        dataCart,
    } = props;

    return (
        <>
            <div className="container-new">
                <div className="new">
                    <div className="items">
                        <h1>NEW ITEMS </h1><p>OF THIS SEASON</p>
                    </div>
                    <div className="buton">
                        <button className="buton1"><ion-icon name="arrow-back-outline"></ion-icon></button>
                        <button className="buton2"><ion-icon name="arrow-forward-outline"></ion-icon></button>
                    </div>
                </div>

                <div className="tongbo">
                    { dataCart.map((e) => (
                        <div class="card" style={ { width: "250px" } }>
                            <div class="carousel-item active">
                            <a href="/detail"><img src={ e.image } class="d-block w-100 an" alt="..." /></a>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{ e.name }</h5>
                                <p class="card-text">{ e.content }</p>
                                <img src={e.icon} alt="" />
                            </div>
                        </div>
                    )) }
                </div>

            </div>
        </>
    );
}

export default Carts;