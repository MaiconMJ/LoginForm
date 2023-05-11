import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login"; 
import SignUp from "../pages/SignUp"
import Profile from '../pages/Profile';
import { Erro } from '../Pages/Erro';

const Router = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"*"} element={<Erro />} /> */
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;