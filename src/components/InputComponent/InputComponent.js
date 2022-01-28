import React from 'react';
import './InputComponent.css';

import keyboard from '../../assets/outline_keyboard_black_24dp.png';
// eslint-disable-next-line react/prop-types
const InputComponent = ({ placeholder, handleSubmit, handleOnChange }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <img className="keyboard-img" src={keyboard}></img>
          <input type="text" onChange={handleOnChange} placeholder={placeholder} />
        </label>
        <button type="submit">&rarr; </button>
      </form>
    </>
  );
};

export default InputComponent;
