import React from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom';
import  useForm from '../hooks/UseForm'
import axios from 'axios';
import { BASE_URL } from '../constants/urls';

function SignUp() {

  const navigate = useNavigate();
  const [form, onChange, clear] = useForm({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match')
    } else {
      navigate('/')
    }
  }

  const onSubmitSignup = () => {
    axios
      .post(`${BASE_URL}/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token)
        navigate("")
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }

  return (
    <body>
      <div class="caixa__login">
        <h2>Register</h2>
        <form>
          <div class="caixa__login-input">
            <input type="text" required />
            <label>Name</label>
          </div>
          <div class="caixa__login-input">
            <input type="password" required />
            <label>Email</label>
          </div>
          <div class="caixa__login-input">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div class="caixa__login-input">
            <input type="password" required />
            <label>Confirm Password</label>
          </div>
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </a>
        </form>
      </div>
    </body>
  )
}

export default SignUp