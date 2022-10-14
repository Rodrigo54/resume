import { createGlobalStyle } from 'styled-components';

const PrintStyles = createGlobalStyle`
  @media print{

    #root {
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

    @page{
      size: A4 portrait;
      margin: 0cm;
    }
    *{
      background: transparent !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    :root{
      font-size: 11pt;
    }
    html, body {
      font-size: 11pt;
      margin:0;
      padding: 0;
      display: contents;
      h2,h3, blockquote { page-break-after: avoid; }
      p, h2, h3, blockquote{
        orphans: 3;
        widows: 3;
      }
    }
    #root, #root > div {
      display: contents;
      & > div {
        opacity: 0;
        width: 0px;
        height: 0px;
        margin: 0px;
        padding: 0px;
      }
      main {
        margin: 0;
        padding: 10mm;
        display: grid !important;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
export default PrintStyles;
