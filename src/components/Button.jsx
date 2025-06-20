import React from 'react'
import { useTheme } from '../themes/ThemeContext';



const Button = () => {
    const { toggleTheme, theme } = useTheme();//Es lo que me importo desde ThemeContext.js, en la constante useTheme que desestructuro


return (
    <button onClick={ toggleTheme }> 
      Cambiar a {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default Button;