import React from 'react';
import './Login.css';


function Login() {

  
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
