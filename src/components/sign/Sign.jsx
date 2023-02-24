import "./sign.css";
import React, { useEffect, useState } from "react"


function Sign() {

    const handleSubmit = (event) => {
        event.preventDefault()
        const dataInput = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        fetch('http://localhost:3000/user')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                for (let i = 0; i < data.length; i++) {
                    console.log(data);
                    if (data[i].email === event.target.email.value) {
                        return alert("Trùng email")
                    } else {
                        return fetch('http://localhost:3000/user', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(dataInput),
                        })
                            .then((response) => response.json())
                            .then((data) => {
                                alert("Đăng kí thành công")
                                return window.location.href = "http://localhost:3001/login"
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                            });
                    }
                }
            });

    }
    return (
        <>
            <div className="tongform1">
                <div className="taito">
                    <div className="logo">
                        <img src="http://flixgo.volkovdesign.com/main/img/logo.svg" alt="" />
                    </div>
                    <form onSubmit={ handleSubmit }>
                        <div className="input1">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div className="input2">
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="input3">
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="chatbook1">
                            <input type="checkbox" name="" id="" />
                            <div className="proactiti">
                                <label>I agree to the !</label>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                        <div className="signin">
                            <button>SIGN IN</button>
                        </div>
                    </form>
                    <div className="dont">
                        <p>Already have an account?</p>
                        <a href="/login">Sign up!</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sign;
