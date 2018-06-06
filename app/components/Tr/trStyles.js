import { css } from 'styled-components';

const trStyles = css`
    border: 1px solid black;
    width : 100%;
    &:nth-child(even) {
    background: #c0c0c0;
    }
    &:nth-child(odd) {
    background: white;
    }
    
`;


export default trStyles;

