import React, {useState} from 'react';
import TodoList from '../src/Components/TodoList'
import ThemeSwitcher from '../src/Components/ThemeSwitcher'
import { ThemeProvider } from 'styled-components'

import * as themes from '../src/styles/themes'

import ThemeContext from '../src/styles/themes/context'
function App() {

  const [theme,setTheme] = useState(themes.dark)
  
  const toggleTheme = () => {
    setTheme(themez => themez === themes.dark?themes.light:themes.dark)
  }
  return (
    <>
    <ThemeContext.Provider value={theme}>
      <ThemeSwitcher toggleTheme={toggleTheme}></ThemeSwitcher>
        <ThemeContext.Consumer>
          {theme =>(
            <ThemeProvider theme={theme}>
              <TodoList></TodoList>  
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
    </ThemeContext.Provider>
    </>
  );
}

export default App;
