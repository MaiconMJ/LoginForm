import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import  useForm from '../hooks/UseForm'
import axios from 'axios';
import { BASE_URL } from '../constants/urls';
import { goToLogin } from '../router/RouteFunctions';

function SignUp() {

  const navigate = useNavigate();
  const [form, onChange/*, clear*/] = useForm({
    name: '',
    email: '',
    password: '',
  })

  

  const onSubmitForm = (event) => {
    event.preventDefault()

    

  }

  const onSubmitSignup = () => {
    axios
      .post(`${BASE_URL}/signup`, form)
      .then((res) => {
        console.log(res.data.token)
        localStorage.setItem("token", res.data.token)
        navigate("/profile")
      })
      .catch((err) => {
        console.log(err.response.data)
      })

      if(!form.name || !form.email || !form.password){
        alert("Please, fill all the fields")
      }
      
  }

  return (
    <body>
      <div class="caixa__login">
        <h2>Register</h2>
        <form onSubmit={onSubmitForm}>
          <div class="caixa__login-input">
            <input 
              type={'text'}
              onChange={onChange}
              name={'name'}
              value={form.name}
              required 
            />
            <label>Name</label>
          </div>
          <div class="caixa__login-input">
            <input 
              type={'email'}
              onChange={onChange}
              name={'email'}
              value={form.email}
              required 
            />
            <label>Email</label>
          </div>
          <div class="caixa__login-input">
            <input 
              type={'password'}
              onChange={onChange}
              name={'password'}
              value={form.password}
              required 
            />
            <label>Password</label>
          </div>
          <a onClick={onSubmitSignup}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </a>
          <a style={{marginLeft: 90}} onClick={() => goToLogin(navigate)}> 
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Back
          </a>
        </form>
      </div>
    </body>
  )
}

export default SignUp