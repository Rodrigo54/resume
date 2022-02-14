import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote,
  pre, a, abbr, acronym, address, big,
  cite, code, del, dfn, em, img, ins, kbd,
  q, s, samp, small, strike, strong, sub, sup,
  tt, var, b, u, i, center, dl, dt, dd, ol,
  ul, li, fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr,
  th, td, article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: inherit;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
    &:before,
    &:after {
      content: "";
      content: none;
    }
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  :root{
    font-size: 16px;
  }

  body {
    line-height: 1.3;
    font-display: optional;
    font-family: -apple-system, BlinkMacSystemFont, Calibri, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(170,170,170,0.3);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(170,170,170,0.8);
    box-shadow: inset 0 0 6px rgba(170,170,170,0.5);
    border-radius: 5px;
    &:window-inactive {
      background: rgba(170,170,170,0.4);
    }
  }
`;
export default GlobalStyles;
