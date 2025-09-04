import { AuthContextProvider, GlobalStyle, MyRoutes, useThemeStore }  from './index'
import  {ThemeProvider} from 'styled-components'
import { Device } from './styles/breakpoints';
/* import { useState } from 'react';
import { useLocation } from 'react-router-dom'; */
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
  const {themeStyle} = useThemeStore();

  

  return (
    <ThemeProvider theme={themeStyle}>
      <AuthContextProvider>
        <GlobalStyle />
        <MyRoutes />
    <ReactQueryDevtools initialIsOpen={true} />
      
      
      </AuthContextProvider>
    </ThemeProvider>
  )
}


export default App
