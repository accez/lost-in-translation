import React from 'react';

import InputComponent from '../../components/InputComponent/InputComponent';
import useFetch from '../../helpers/useFetch';
import { config } from '../../helpers/config';

import logo from '../../assets/Logo-Hello.png';
import splash from '../../assets/Splash.svg';
import './StartScreen.css';

const StartScreen = () => {
  const res = useFetch(`${config.url}/translations`, {});
  console.log(res.response);

  return (
    <div className="start-screen-body">
      <div className="container">
        <div className="logo-container">
          <div>
            <img className="logo" src={logo}></img>
            <img className="splash" src={splash}></img>
          </div>
          <div className="text">
            <h1>Lost in Translation</h1>
            <h2>Get started</h2>
          </div>
        </div>
        <div className="box-container">
          <div className="card">
            <InputComponent placeholder="What is your name?" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
