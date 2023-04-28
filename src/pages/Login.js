import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/urls';
import axios from 'axios';


function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }
  
  const onSubmitLogin = () => {
    const url = `${BASE_URL}/`

    const body = {
      email: email,
      password: password
    }

    axios
      .post(url, body)
      .then((res) => {
      localStorage.setItem('token', res.data.token)
      navigate('')
    })
    .catch((err) => {
      alert('User not found')
    })
  }

  return (
    <body>
      <div class="caixa__login">
        <h2>Administrativo</h2>
        <form>
          <div class="caixa__login-input">
            <input type="text" required />
            <label>Email</label>
          </div>
          <div class="caixa__login-input">
            <input type="password" required />
            <label>Password</label>
          </div>
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
      </div>
    </body>
  )
}

export default Login;
