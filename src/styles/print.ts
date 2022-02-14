import { createGlobalStyle } from 'styled-components';

const PrintStyles = createGlobalStyle`
  @media print{
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
