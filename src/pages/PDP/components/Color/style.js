import { css } from '@emotion/css';

export const colorContainer = (hex, isSelected) => css`
    width: 25px;
    height: 25px;
    ${isSelected && `border: 1px solid ${hex};`}
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    transition: all .25s ease-in-out;
    cursor: pointer;

    & .outer {
        background: ${hex};
        width: 15px;
        height: 15px;
        border-radius: 20px;
    }
`;
