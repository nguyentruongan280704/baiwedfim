import "./login.css"
import React, { useEffect, useState } from "react"
import { redirect } from "react-router-dom";

function Login() {

  const handleSubmit = (event) => {
    event.preventDefault()
    let emailDaNhap = event.target.user.value
    let passwordDaNhap = event.target.password.value
    console.log(emailDaNhap);
    console.log(passwordDaNhap);
    fetch('http://localhost:3000/user')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // for (let i = 0; i < data.length; i++) {
        //   console.log(data[i].email);
        //   if (data[i].email === emailDaNhap && data[i].password === passwordDaNhap) {
        //     return window.location.href = "http://localhost:3001/"
        //   } else if (data[i].email !== emailDaNhap && data[i].password !== passwordDaNhap) {
        //     return alert("Sai email và mật khẩu")
        //   } else if (data[i].email !== emailDaNhap) {
        //     return alert("Sai email")
        //   } else {
        //     return alert("Sai mật khẩu")
        //   }
        // }
        let test = data.find((e) => {
          return e.email === emailDaNhap && e.password === passwordDaNhap
        })
        console.log(test);
        if (test) {
          return window.location.href = "http://localhost:3001/"
        } else {
          return alert("sai email hoac mat khau")
        }
      }
      );

  }

  return (
    <>
      <div className="tongform1">
        <div className="taito1">
          <div className="logo">
            <img src="http://flixgo.volkovdesign.com/main/img/logo.svg" alt="" />
          </div>
          <form onSubmit={ handleSubmit }>
            <div className="input1">
              <input type="email" name="user" placeholder="Email" />
            </div>
            <div className="input2">
              <input type="password" name="password" placeholder="Password" id="password" />
            </div>
            <div className="chatbook">
              <input type="checkbox" name="" id="" />
              <label>Remember Me</label>
            </div>
            <div className="signin">
              <button>SIGN IN</button>
            </div>
          </form>
          <div className="dont">
            <p>Don't have an account?</p>
            <a href="/sign">Sign up!</a>
          </div>
          <div className="forgot">
            <a href="/resetemail">Forgot password?</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;