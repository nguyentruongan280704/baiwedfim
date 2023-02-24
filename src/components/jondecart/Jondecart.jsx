import "./jondecart.css";
import React, { useState } from "react";

function Jondecart() {

    const [chat, setChat] = useState([])
    const handleSubmit = (event) => {
        event.preventDefault()
        const datalist = {
            inputlist: event.target.inputlist.value
        }

        fetch('http://localhost:3000/commet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datalist),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        fetch('http://localhost:3000/commet')
            .then((response) => response.json())
            .then((data) => setChat(data));
    }
    return (
        <>
            <div className="youtulist">
                <div className="phosolangdao">
                    <div className="yourtong">
                        <div className="johndoe">
                            <div className="imgagefixgo">
                                <img src="http://flixgo.volkovdesign.com/main/img/user.svg" alt="" />
                            </div>
                            <div className="nagyvagio">
                                <span>Jonh Doe</span>
                                <label>30.08.2018, 17:53</label>
                            </div>
                        </div>
                        <div className="there">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div className="liveanh">
                            <div className="baybong">
                                <div className="tolive">
                                    <ion-icon name="thumbs-up-outline"></ion-icon> 12
                                </div>
                                <div className="baylive">
                                    7 <ion-icon name="thumbs-down-outline"></ion-icon>
                                </div>
                            </div>
                            <div className="baylac">
                                <div className="aroona">
                                    <ion-icon name="arrow-redo-outline"></ion-icon> <span>REPLY</span>
                                </div>
                                <div className="chatblus">
                                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon><span>QUOTE</span>
                                </div>
                            </div>
                        </div>
                        <div className="johndoe">
                            <div className="imgagefixgo">
                                <img src="http://flixgo.volkovdesign.com/main/img/user.svg" alt="" />
                            </div>
                            <div className="nagyvagio">
                                <span>Jonh Doe</span>
                                <label>30.08.2018, 17:53</label>
                            </div>
                        </div>
                        <div className="there">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div className="liveanh">
                            <div className="baybong">
                                <div className="tolive">
                                    <ion-icon name="thumbs-up-outline"></ion-icon> 12
                                </div>
                                <div className="baylive">
                                    7 <ion-icon name="thumbs-down-outline"></ion-icon>
                                </div>
                            </div>
                            <div className="baylac">
                                <div className="aroona">
                                    <ion-icon name="arrow-redo-outline"></ion-icon> <span>REPLY</span>
                                </div>
                                <div className="chatblus">
                                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon><span>QUOTE</span>
                                </div>
                            </div>
                        </div>
                        <div className="johndoe">
                            <div className="imgagefixgo">
                                <img src="http://flixgo.volkovdesign.com/main/img/user.svg" alt="" />
                            </div>
                            <div className="nagyvagio">
                                <span>Jonh Doe</span>
                                <label>30.08.2018, 17:53</label>
                            </div>
                        </div>
                        <div className="there">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div className="liveanh">
                            <div className="baybong">
                                <div className="tolive">
                                    <ion-icon name="thumbs-up-outline"></ion-icon> 12
                                </div>
                                <div className="baylive">
                                    7 <ion-icon name="thumbs-down-outline"></ion-icon>
                                </div>
                            </div>
                            <div className="baylac">
                                <div className="aroona">
                                    <ion-icon name="arrow-redo-outline"></ion-icon> <span>REPLY</span>
                                </div>
                                <div className="chatblus">
                                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon><span>QUOTE</span>
                                </div>
                            </div>
                        </div>
                        <div className="johndoe">
                            <div className="imgagefixgo">
                                <img src="http://flixgo.volkovdesign.com/main/img/user.svg" alt="" />
                            </div>
                            <div className="nagyvagio">
                                <span>Jonh Doe</span>
                                <label>30.08.2018, 17:53</label>
                            </div>
                        </div>
                        <div className="there">
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                        <div className="liveanh">
                            <div className="baybong">
                                <div className="tolive">
                                    <ion-icon name="thumbs-up-outline"></ion-icon> 12
                                </div>
                                <div className="baylive">
                                    7 <ion-icon name="thumbs-down-outline"></ion-icon>
                                </div>
                            </div>
                            <div className="baylac">
                                <div className="aroona">
                                    <ion-icon name="arrow-redo-outline"></ion-icon> <span>REPLY</span>
                                </div>
                                <div className="chatblus">
                                    <ion-icon name="chatbubble-ellipses-outline"></ion-icon><span>QUOTE</span>
                                </div>
                            </div>
                        </div>

                        <div className="addcommen">
                            <form onSubmit={ handleSubmit } >
                                <div className="khungass">
                                    <input type="inputlist"
                                        name="inputlist"
                                        placeholder="Add comment" />
                                </div>
                                <div className="butontai">
                                    <button>SEND</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="tonganhthat">
                        <div className="youmanny">
                            <div className="aslolive">
                                <p>You may also like...</p>
                            </div>
                            <div className="mageimage">
                                <div className="dumandeo1">
                                    <a href="/detail"><img src="http://flixgo.volkovdesign.com/main/img/covers/cover.jpg" alt="" /></a>
                                    <p>I Dream in Anoth...</p>
                                    <div className="atitai">
                                        <img src="http://flixgo.volkovdesign.com/main/img/star.svg" alt="" />
                                        <span>8.4</span>
                                    </div>
                                </div>
                                <div className="himalya">
                                    <a href="/detail"><img src="http://flixgo.volkovdesign.com/main/img/covers/cover3.jpg" alt="" /></a>
                                    <p>Benched</p>
                                    <div className="tudutaito">
                                        <img src="http://flixgo.volkovdesign.com/main/img/star.svg" alt="" />
                                        <span>7.1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="youmanny">
                            <div className="aslolive">
                                <p>You may also like...</p>
                            </div>
                            <div className="mageimage">
                                <div className="dumandeo1">
                                    <a href="/detail"><img src="http://flixgo.volkovdesign.com/main/img/covers/cover2.jpg" alt="" /></a>
                                    <p>Whitney</p>
                                    <div className="atitai">
                                        <img src="http://flixgo.volkovdesign.com/main/img/star.svg  " alt="" />
                                        <span>8.4</span>
                                    </div>
                                </div>
                                <div className="himalya">
                                    <a href="/detail"><img src="http://flixgo.volkovdesign.com/main/img/covers/cover6.jpg" alt="" /></a>
                                    <p>Blindspotting</p>
                                    <div className="tudutaito">
                                        <img src="http://flixgo.volkovdesign.com/main/img/star.svg" alt="" />
                                        <span>7.1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="youmanny">
                            <div className="aslolive">
                                <p>You may also like...</p>
                            </div>
                            <div className="mageimage">
                                <div className="dumandeo1">
                                    <a href="/detail"><img src="http://flixgo.volkovdesign.com/main/img/covers/cover4.jpg" alt="" /></a>
                                    <p>I Dream in Anoth...</p>
                                    <div className="atitai">
                                        <img src="http://flixgo.volkovdesign.com/main/img/star.svg" alt="" />
                                        <span>8.4</span>
                                    </div>
                                </div>
                                <div className="himalya">
                                    <a href="/detail"><img src="http://flixgo.volkovdesign.com/main/img/covers/cover5.jpg" alt="" /></a>
                                    <p>Benched</p>
                                    <div className="tudutaito">
                                        <img src="http://flixgo.volkovdesign.com/main/img/star.svg" alt="" />
                                        <span>7.1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Jondecart;