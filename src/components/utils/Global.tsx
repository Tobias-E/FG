import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';
//import { primaryFont, headerFont } from './typography';
import { normalize } from 'polished';

import ABZ from '../../assets/fonts/ABeeZee-Regular.ttf';
import ABZItalic from '../../assets/fonts/ABeeZee-Italic.ttf';
import { theme } from '../utils';

export const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
    ${normalize}
    html{
        font-size: 16px;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }

    @font-face {
        font-family: ABeeZee;
        font-style: normal;
        src: url(${ABZ});
    }

    @font-face {
        font-family: ABeeZeeItalic;
        font-style: normal;
        src: url(${ABZItalic});
    }

    body{
        margin: 0;
        font-family: "ABeeZee";
        background-color: ${theme.primaryColor}
    }
    h1, h2, h3, h4, h5, h6, p, i, li, span{
        font-family: "ABeeZee";
        color: ${theme.textColor}
    }
`;
