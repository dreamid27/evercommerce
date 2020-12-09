import { css } from '@emotion/css';
import { mobileDevice } from '@shared/responsive';

export const wrapper = css`
    padding: 20px 25px;
`;

export const containerList = css`
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    grid-auto-rows: 1fr;
    column-gap: 10px;
    row-gap: 18px;
  

    ${mobileDevice(css`
        grid-template-columns: auto auto;
    `)}
`;

export const headerTitle = css`
    width : 100%;
    margin-bottom: 35px;
    
    & span {
        display: block;
    }

    & [data-title] {
        font-weight: bold;
        font-size: 1.7rem;
        line-height: 29px;
        font-family: 'Montserrat', sans-serif;
    }
    & [data-subtitle] {
        font-size: 0.8rem;
        line-height: 16px;
    }
    
`;
