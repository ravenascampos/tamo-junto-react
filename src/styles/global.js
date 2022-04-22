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

.react-modal-overlay {
background: rgba(0, 0, 0, 0.5);
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
}
.react-modal-content {
width: 100%;
max-width: 576px;
background: ${theme.colors.accent1.a110};
padding: 3rem;
position: relative;
border-radius: 0.25px;
}
.react-modal-close {
position: absolute;
right: 1.5rem;
top: 1.5rem;
border: 0;
background: transparent;
transition: filter 0.2s;
&:hover {
    filter: brightness(0.8);
}
}
`;
