import { css, injectGlobal } from '@emotion/css';
import { mobileDevice } from './responsive';
import {
  backgroundColor, primary, grey, white,
} from './color';

injectGlobal`
    * {
        box-sizing: border-box;
        border: 0 solid #e5e7eb;
    }

    body, html {
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: 'Assistant', sans-serif;
        background: ${backgroundColor};
    }

    button {
        appearance: button;
        -webkit-writing-mode: horizontal-tb !important;
        text-rendering: auto;
        color: white;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: center;
        align-items: flex-start;
        cursor: default;
        box-sizing: border-box;
        margin: 0em;
        font: 400 1rem Assistant;
        padding: 1px 6px;
        max-width: 280px;
    }

    button {
        background-color: transparent;
        background-image: none;
        cursor: pointer;
    }
    button, select {
        text-transform: none;
    }
    
    button, input, optgroup, select, textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }

    a {
        color: inherit;
        text-decoration: inherit;
    }
`;

export const mainContainer = css`
    width: 1280px;
    margin: 0 auto;
    padding: 80px 0;

    ${mobileDevice(css`
        width: 100%;
        padding: 0px;`)}
`;

export const baseCont = css`
    margin: 0;
    padding: 0;
`;

export const buttonPrimary = css`
    padding: .5rem 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 600;
    flex-shrink: 0;
    border-radius: .5rem;
    background-color: ${primary};
    color: ${white};
`;

export const headerContainer = css`
    height: 50px;
    border-bottom: solid 1px ${grey};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: ${primary};
`;
