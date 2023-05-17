import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/urls';
import axios from 'axios';


function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const body = {
    email: email,
    password: password
  }


  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onSubmitLogin = () => {
    axios
      .post(`${BASE_URL}/`, body)
      .then((res) => {
        console.log(res.data.token)
        localStorage.setItem('token', res.data.token)
        navigate('/profile')
      })
      .catch((err) => {
        console.log(err.response.data)
        alert('User not found')
      })

  }

  return (
    <body>
      <div class="caixa__login">
        <h2>Login</h2>
        <form>
          <div class="caixa__login-input">
            <input
              type={'email'}
              value={email}
              onChange={onChangeEmail}
              required />
            <label>Email</label>
          </div>
          <div class="caixa__login-input">
            <input
              type={'password'}
              value={password}
              onChange={onChangePassword}
              required />
            <label>Password</label>
          </div>
          <a onClick={onSubmitLogin}> 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Enter
          </a>
        </form>
      </div>
    </body>
  )
}

export default Login;
