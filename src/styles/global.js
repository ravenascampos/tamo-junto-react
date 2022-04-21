import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
html {
    scroll-behavior: smooth;
}

body {
    background: ${theme.colors.neutral.white};
}

body, input, textarea, select, button {
    font-family: "Raleway", sans-serif;
}

button {
    cursor: pointer;
    background: transparent;
    border: none;
}
`;
