import "./login.css"
import React, { useEffect, useState } from "react"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

function Login() {
  return (
    <>
      <div className="tongform1">
        <div className="taito1">
          <div className="logo">
              <img src="http://flixgo.volkovdesign.com/main/img/logo.svg" alt="" />
          </div>
          <div className="input1">
              <input type="text" placeholder="Email"/>
          </div>
          <div className="input2">
              <input type="text" placeholder="Password"/>
          </div>
          <div className="chatbook">
              <input type="checkbox" name="" id="" />
              <label>Remember Me</label>
          </div>
          <div className="signin">
              <button>SIGN IN</button>
          </div>
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