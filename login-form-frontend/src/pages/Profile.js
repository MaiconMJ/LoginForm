import React, { useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useProtectedPage } from '../hooks/UseProtectPage';

function Profile() {

  useProtectedPage();

  return (
    <body>
      <div class="caixa__login">
        <h2>Profile</h2>
        <form style={{textAlign: 'center'}}>
          <a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            You are logged!
          </a>
        </form>
      </div>
    </body>
  )
}

export default Profile;
