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

    --font-title: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    --font-body: Calibri, 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
  }


  body.dark {
    --color1: #78a1bb;
    --color1-light: #7ca5b8;
    --color1-shade: #274c77;
    --color1-contrast: #ebf5ee;

    --color2: #fff;
    --color2-light: #eee;
    --color2-shade: #eee;
    --color2-contrast: #1b1b1b;

    --text-color: #e3f2fd;
    --paper-background: #000814;
    --paper-shadow: 0px 0px 5px #575a5e;
    --background-gradient: linear-gradient(0deg, #0c1821 0%, #1b2a41 100%);
    --background: #adcce4;
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

    --font-title: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    --font-body: Calibri, 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;
  }


`;
export default ThemeStyles;
