import Narbar from "../Narbar/Narbar";
import Form from "../form/Form";
import Discover from "../discover/Discover";
import Jondecart from "../jondecart/Jondecart";
import React, { Component } from 'react'
import video from "../../assets/View_From_A_Blue_Moon_Trailer-576p.mp4"
import "./formChiTiet.css"

function FromChiTiet() {
    return (<>
        <Narbar />
        <div className="chitiettong">
            <div className="anthor">
                <p>I Dream in Another Language</p>
            </div>
            <div className="famylitong">
                <div className="contong">
                    <div className="imagera">
                        <img src="http://flixgo.volkovdesign.com/main/img/covers/cover.jpg" alt="" />
                    </div>
                    <div className="genrena">
                        <div className="hdphim">
                            <img src="http://flixgo.volkovdesign.com/main/img/star.svg" alt="" />
                            <p>8.4</p>
                            <label>HD</label>
                            <label>16+</label>
                        </div>
                        <div className="genreact">
                            <p>Genre : </p>
                            <label>Action, Triler</label>
                        </div>
                        <div className="release">
                            <p>Release year: 2017</p>
                        </div>
                        <div className="runing">
                            <p>Running time: 120 min</p>
                        </div>
                        <div className="country">
                            <p>Country:</p>
                            <label> USA</label>
                        </div>
                        <div className="long">
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of</p>
                        </div>
                    </div>
                </div>
                <div className="viode">
                    <video controls >
                        <source src={ video } type="video/mp4" />
                    </video>
                </div>
            </div>

        </div>
        <Discover/>
        <Jondecart/>
        <Form />
    </>);
}

export default FromChiTiet;