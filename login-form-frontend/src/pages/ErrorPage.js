import React from "react";
import { useNavigate } from "react-router-dom";



const ErrorPage = () => {

  const navigate = useNavigate()

  return (
    <body>
      <div class="caixa__login">
        <h2>Page not found</h2>
        <form style={{textAlign: 'center'}}>
          <a href='/'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Back to Login
          </a>
        </form>
      </div>
    </body>
  )

}

export default ErrorPage


