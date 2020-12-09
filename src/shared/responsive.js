import { css } from '@emotion/css';

export const desktopDevice = (styling) => css`
    @media only screen and (min-width: 1280px) {
        ${styling}
    }
`;

export const mobileDevice = (styling) => css`
    @media only screen and (max-width: 1024px) {
        ${styling}
    }
`;
