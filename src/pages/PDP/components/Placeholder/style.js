import { css } from '@emotion/css';
import { desktopDevice, mobileDevice } from '@shared/responsive';

export const container = css`
    width: 100%;

    & svg {
        width: 100%;
    }

    ${desktopDevice(css`
    &[data-mobile] {
        display: none;
    }
    
    &[data-desktop] {
        display: block;
    }

    `)};
    
    ${mobileDevice(css`
    &[data-mobile] {
        display: block;
    }
    
    &[data-desktop] {
        display: none;
    }
    `)};


`;
