import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartScreen from './views/StartScreen/StartScreen';
import TranslationScreen from './views/TranslationScreen/TranslationScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/translation" element={<TranslationScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
