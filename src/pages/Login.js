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
            <label>Senha</label>
          </div>
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Acessar
          </a>
        </form>
      </div>
    </body>
  )
}

export default Login;
