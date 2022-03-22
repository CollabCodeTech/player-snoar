import { createGlobalStyle } from "styled-components";

const Colors = createGlobalStyle`
  :root {
    --color-primary: #209cee;
    --color-success: #92cc41;
    --color-warning: #f7d51d;
    --color-error: #e76e55;

    --color-first-black: #000000;
    --color-second-black: #212529;
    --color-third-black: #e7e7e7;
    --color-fourth-black: #e4e4e4;
  }
`;

export default Colors;
