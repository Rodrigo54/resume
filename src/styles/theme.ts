import { createGlobalStyle } from 'styled-components';

const ThemeStyles = createGlobalStyle`
  :root {
    --color1: #fafafa;
    --color1-light: #EEF1F4;
    --color1-shade: #fafafa;
    --color1-contrast: #292929;

    --color2: #fff;
    --color2-light: #eee;
    --color2-shade: #eee;
    --color2-contrast: #1b1b1b;

    --color3: #1e88e5;
    --color3-light: #90caf9;
    --color3-shade: #0d47a1;
    --color3-contrast: #fff;

    --font-title: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;;
    --font-body: Calibri, 'Gill Sans', 'Gill Sans MT', 'Trebuchet MS', sans-serif;;
  }
`;
export default ThemeStyles;
