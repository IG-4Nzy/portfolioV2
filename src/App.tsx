import './App.scss';
import React, { useState } from 'react';
import { ThemeContext } from './context/context';
import { HeroPage } from './pages/HeroPage';

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className="App">
        <HeroPage />
      </div>
   </ThemeContext.Provider>
  );
}

export default App;
