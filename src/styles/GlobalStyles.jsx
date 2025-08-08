import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle `
    
    body{
        font-family:"Poppins", sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color:${({theme})=>theme.bgtotal};
        color: white;
        
    }

`