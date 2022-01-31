import './TranslationScreen.css';
import SignLanguageCard from './components/SignLanguageCard';
import InputComponent from '../../components/InputComponent/InputComponent';
import { useState } from 'react';

const TranslationScreen = () => {
  const apiURL = 'https://spa-lb-experis-assignment.herokuapp.com';
  const apiKey = 'X9dHGcSU9kuwKyxz2/p+TA==';
  const userId = 1; // Update user with id 1
  function UpdateUserTranslation(translation) {
    fetch(`${apiURL}/translations/${userId}`, {
      method: 'PATCH', // NB: Set method to PATCH
      headers: {
        'X-API-Key': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // Provide new translations to add to user with id 1
        translations: [translation]
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

  const [translateInput, SetTranslateInput] = useState('');

  const submitTranslation = (e) => {
    e.preventDefault();
    SetTranslateInput(e.target[0].value);
    UpdateUserTranslation(translateInput);
    e.target[0].value = '';
  };
  const placeHolder = 'Translate this text';

  return (
    <div className="translation-screen-body">
      <div className="input">
        <InputComponent placeholder={placeHolder} handleSubmit={(e) => submitTranslation(e)} />
      </div>

      <SignLanguageCard input={translateInput} />
    </div>
  );
};

export default TranslationScreen;
