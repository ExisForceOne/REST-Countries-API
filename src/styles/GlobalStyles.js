import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-family: 'Nunito Sans', sans-serif;
}

body {
    background-color: hsl(0, 0%, 98%);
    background-color: ${({ theme }) => theme.bgcColor};
}

button {
    border: none;
    outline: none;
    font-size: inherit;
    font-family: inherit;
    background-color: inherit;
    cursor: pointer;
    color: inherit;
}

input,select,option{
    font-size: inherit;
    color: inherit;
    border: none;
    outline: none;
    background-color: inherit;
}

input::placeholder{
    color: inherit;
}

a {
    text-decoration: none;
    display: block;
}

`;

export default GlobalStyles;
