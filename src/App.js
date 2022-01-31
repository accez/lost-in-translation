import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import StartScreen from './views/StartScreen/StartScreen';
import TranslationScreen from './views/TranslationScreen/TranslationScreen';
import ProfileScreen from './views/ProfileScreen/ProfileScreen';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartScreen />} />
          <Route path="/translation" element={<TranslationScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
