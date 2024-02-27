

import { createGlobalStyle } from "styled-components";

import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

const GlobalStyles = createGlobalStyle `

:root{
  --darkBlue_1: #3B447A;
  --darkBlue_2: #222B5F;
  --darkBlue_3: #0A0F19;
  --darkBlue_4: #101826;
  --mediumSlateBlue: #6C62E2;
  --lightBlue_1: #F3F1FE;
  --lightBlue_2: #ADBDE3;
  --white: #FFFFFF;
  --black: #000000;

  --lightgray: #D9D9D9;
  --gray: #9c9c9c;
  --orange: #f48915;
  --darkGrey: #464D53;
  --caloryCard: #656565;
  --planCard: linear-gradient(210.41deg, #fa5042 1.14%, #ffa739 100.75%);
  --appColor:  #3c3f45;

  --cannyLemon: #70a107;
  --cannyGreen: #014035;

  --boxShadow: 3px 3px 5px gray;
}


body{
  font-family: 'Poppins', sans-serif;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

a{
  text-decoration: none;
  cursor: pointer;
}


ul, li{
  list-style: none;
}

.container{
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}


img, svg{
  width: 100%;
  height: 100%;
}

`;

export default GlobalStyles;