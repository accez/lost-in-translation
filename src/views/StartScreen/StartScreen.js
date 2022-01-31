import React, { useState, useContext } from 'react';

import InputComponent from '../../components/InputComponent/InputComponent';
import { UserContext } from '../../helpers/UserContext';
import { config } from '../../helpers/config';
import useFetch from '../../helpers/useFetch';

import logo from '../../assets/Logo-Hello.png';
import splash from '../../assets/Splash.svg';
import './StartScreen.css';

const StartScreen = () => {
  const [userInput, setUserInput] = useState('');
  const { loggedIn, username, userId } = useContext(UserContext);
  const [, setIsLoggedIn] = loggedIn;
  const [, setUsernameValue] = username;
  const [, setUserID] = userId;
  const users = useFetch(`${config.url}/translations`, {});

  const handleSubmit = async (event) => {
    const uniq = new Date().getTime();
    event.preventDefault();
    let doesUserExist = await doesUserExistInDatabase(users.response);
    if (doesUserExist === true) {
      return;
    } else {
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
        setUsernameValue(jsonResponse.username);
        setUserID(jsonResponse.id);
        setIsLoggedIn(true);
      } catch (error) {
        console.error(console.error());
      }
    }
  };

  /**
   *Check if user exist.
   * If the user exists then it will be added to local storage.
   * @param {Object} users The fetched users object
   * @returns {Boolean} If the user exist in database
   */
  const doesUserExistInDatabase = async (users) => {
    for (const user of users) {
      if (user.username === userInput) {
        storeUserInLocalStorage('user', JSON.stringify(user));
        setUsernameValue(user.username);
        setUserID(user.id);
        setIsLoggedIn(true);
        return true;
      }
    }
  };

  /**
   * Saves object to local storage.
   * @param {String} key The key name of the object.
   * @param {Object} userObject The object you want to add to local storage.
   */
  const storeUserInLocalStorage = (key, userObject) => {
    localStorage.setItem(key, userObject);
  };

  /**
   * Get the user name from input onChange.
   * @param {String} event The targeted String.
   */
  const getUserName = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="start-screen-body">
      <div className="start-screen-container">
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
        <div className="start-screen-box-container ">
          <div className="start-screen-card">
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
