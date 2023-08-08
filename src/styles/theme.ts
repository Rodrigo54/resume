import { createGlobalStyle } from 'styled-components';

const ThemeStyles = createGlobalStyle`
  :root {
    --color1: #2196f3;
    --color1-light: #90caf9;
    --color1-shade: #1e88e5;
    --color1-contrast: #fff;

    --color2: #fff;
    --color2-light: #eee;
    --color2-shade: #eee;
    --color2-contrast: #1b1b1b;

    --text-color: #0a0a0a;
    --paper-background: #fff;
    --paper-shadow: 2px 2px 5px #a2a2a2;
    --background-gradient: linear-gradient(0deg, #adcce4 0%, #e6e6e6 100%);
    --background: #adcce4;

    --font-title: 'Roboto Slab', serif;
    --font-body:  'Noto Sans', sans-serif;
  }


  body.dark {
    --color1: rgb(110 169 255);
    --color1-light: #7ca5b8;
    --color1-shade: #274c77;
    --color1-contrast: #ebf5ee;

    --color2: #fff;
    --color2-light: #eee;
    --color2-shade: #eee;
    --color2-contrast: #1b1b1b;

    --text-color: rgb(230, 237, 243);
    --paper-background: rgb(30 30 30);
    --paper-shadow:
        0px 4px 5px 0px hsla(0,0%,0%,0.14),
        0px 1px 10px 0px hsla(0,0%,0%,0.12),
        0px 2px 4px -1px hsla(0,0%,0%,0.2);
    --background-gradient: linear-gradient(0deg, #121212 0%, #0d181c 100%);
    --background: #121212;
  }

  body.light {
    --color1: #2196f3;
    --color1-light: #90caf9;
    --color1-shade: #1e88e5;
    --color1-contrast: #fff;

    --color2: #fff;
    --color2-light: #eee;
    --color2-shade: #eee;
    --color2-contrast: #1b1b1b;

    --text-color: #0a0a0a;
    --paper-background: #fff;
    --paper-shadow: 2px 2px 5px #a2a2a2;
    --background-gradient: linear-gradient(0deg, #adcce4 0%, #e6e6e6 100%);
    --background: #adcce4;
  }


`;
export default ThemeStyles;
