import './TranslationScreen.css';
import SignLanguageCard from './components/SignLanguageCard';
import InputComponent from '../../components/InputComponent/InputComponent';
import { useState } from 'react';

const TranslationScreen = () => {
  const [translateInput, SetTranslateInput] = useState('');

  const apiURL = 'https://spa-lb-experis-assignment.herokuapp.com';
  const apiKey = 'X9dHGcSU9kuwKyxz2/p+TA==';
  const userId = 1; // Update user with id 1
  async function UpdateUserTranslation(translation) {
    const response = await fetch('https://spa-lb-experis-assignment.herokuapp.com/translations/1');
    const json = await response.json();

    let userPreviousTranslations = json.translations;
    userPreviousTranslations.push(translation);
    let updatedRecord = userPreviousTranslations;

    fetch(`${apiURL}/translations/${userId}`, {
      method: 'PATCH', // NB: Set method to PATCH
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // Provide new translations to add to user with id 1
        translations: updatedRecord
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not update translations history');
        }
        return response.json();
      })
      .then((updatedUser) => {
        console.log(updatedUser);
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  const submitTranslation = (e) => {
    e.preventDefault();
    SetTranslateInput(e.target[0].value);
    UpdateUserTranslation(e.target[0].value);
    e.target[0].value = '';
  };
  const placeHolder = 'Translate this text';

  return (
    <div className="translation-screen-body">
      <div className="input">
        <h1 className="logged-in-user">Logged in user</h1>
        <InputComponent placeholder={placeHolder} handleSubmit={(e) => submitTranslation(e)} />
      </div>

      <SignLanguageCard input={translateInput} />
    </div>
  );
};

export default TranslationScreen;
