import React, { useState } from 'react';
import './InputComponent.css';

import keyboard from '../../assets/outline_keyboard_black_24dp.png';

const InputComponent = ({ placeholder }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    return input;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <img className="keyboard-img" src={keyboard}></img>
          <input type="text" onChange={(e) => setInput(e.target.value)} placeholder={placeholder} />
        </label>
        <button type="submit">&rarr; </button>
      </form>
    </>
  );
};

export default InputComponent;
