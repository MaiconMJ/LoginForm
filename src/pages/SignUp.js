import React from 'react';
import './SignUp.css';

function SignUp() {
  return (
    <body>
      <div class="caixa__login">
        <h2>Cadastro</h2>
        <form>
          <div class="caixa__login-input">
            <input type="text" required />
            <label>Nome</label>
          </div>
          <div class="caixa__login-input">
            <input type="password" required />
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
            Cadastrar
          </a>
        </form>
      </div>
    </body>
  )
}

export default SignUp