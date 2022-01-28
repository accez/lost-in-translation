import './TranslationScreen.css';
import SignLanguageCard from './components/SignLanguageCard';
import InputComponent from '../../components/InputComponent/InputComponent';
import { useState } from 'react';
const TranslationScreen = () => {
  const [translateInput, SetTranslateInput] = useState('');

  const submitTranslation = (e) => {
    e.preventDefault();
    SetTranslateInput(e.target[0].value);
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
