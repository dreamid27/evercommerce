import { css } from '@emotion/css';
import { blueShadow, black } from '@shared/color';

export const quantityContainer = css`
    display: flex;
    align-items: center;

    & button {
        background: ${blueShadow};
        color: ${black};
        font-weight: 600;
        border-radius: 4px;
        width: 30px;
        height: 30px;   
    }

    & span {
        width: 48px;
        text-align: center;
    }
`;
