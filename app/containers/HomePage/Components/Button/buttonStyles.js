import { css } from 'styled-components';

const buttonStyles = css`
   color: #313131;
    cursor: pointer;
    font-size: 16px;
    font-weight: 400;
    line-height: 45px;
    margin: 1em;
    max-width: 160px;
    position: relative;
    border: 1px solid #656565;
    text-decoration: none;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none;
    width: 100%;
    padding: 1em 3em;
    

  &:hover {
    background: #D6D6D6;
    border: 1px solid #437AF3;
    text-decoration: none;
    transition: all 250ms linear;
  }
`;

export default buttonStyles;

