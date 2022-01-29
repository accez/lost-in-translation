import React, { useState } from 'react';

import InputComponent from '../../components/InputComponent/InputComponent';
import { config } from '../../helpers/config';
// import useFetch from '../../helpers/useFetch';

import logo from '../../assets/Logo-Hello.png';
import splash from '../../assets/Splash.svg';
import './StartScreen.css';

const StartScreen = () => {
  const [userInput, setUserInput] = useState('');
  // const data = useFetch(`${config.url}/translations`, {});

  const handleSubmit = async (event) => {
    const uniq = new Date().getTime();
    event.preventDefault();
    try {
      let response = await fetch(`${config.url}/translations`, {
        method: 'POST',
        headers: {
          'X-API-Key': config.apiKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: uniq,
          username: userInput,
          translations: []
        })
      });
      let jsonResponse = await response.json();
      storeUserInLocalStorage('user', JSON.stringify(jsonResponse));
    } catch (error) {
      console.error(console.error());
    }
  };

  const storeUserInLocalStorage = (key, userObject) => {
    localStorage.setItem(key, userObject);
  };

  const getUserName = (event) => {
    setUserInput(event.target.value);
  };

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
            <InputComponent
              placeholder="What is your name?"
              handleSubmit={handleSubmit}
              handleOnChange={getUserName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
