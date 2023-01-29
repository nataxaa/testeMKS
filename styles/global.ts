import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`

:root{
    --background-color: #FFFFFF;
    --header-color: #0F52BA;
    --button-color: #FFFFFF;
    --button-close-color: #000000;
    --hover-color: #ECE9E9;
    --span-red: #F15574;
    --cart-color: #FFFFFF;
    --cart-color-text: #2C2C2C;
    --border-qtd-color: #BFBFBF;
}

*{
    margin: 0;
    padding: 0;
}

body{
    font-family:'Montserrat', sans-serif;
}

`