import "./form.css";
import React from "react";

function Form() {
    return (  
        <>
        <div className="form">
            <div className="download">
                <p>Download Our App</p>
                <img src="http://flixgo.volkovdesign.com/main/img/Download_on_the_App_Store_Badge.svg" alt="" />
                <img src="http://flixgo.volkovdesign.com/main/img/google-play-badge.png" alt="" />
            </div>
            <div className="resources">
                <label>Resources</label>
                <p>About Us</p>
                <p>Pricing Plan</p>
                <p>Help Center</p>
            </div>
            <div className="legal">
                <label>Legal</label>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Security</p>
            </div>
            <div className="contact">
                <label>Contact</label>
                <p>8 800 234 56 78</p>
                <p>support@flixgo.com</p>
                <p>Security</p>
            </div>
        </div>
        </>
    );
}

export default Form;

