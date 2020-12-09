import { css } from '@emotion/css';
import { white, primary } from '@shared/color';

export const productContainer = css`
    border-radius: 4px;
    height: 100%;
    background: ${white};
    cursor: pointer;
    box-shadow: 0px 8px 5px 0px rgba(240,245,254,1);
    animation-name: botTopAnim;
    animation-duration: .45s;
    animation-timing-function: ease-in-out;

    & img {
        width: 100%;
    }
    & span {
        display: block;
        margin-bottom: 2px;
    }

    & .detailContainer {
        padding: 8px;

        & [data-name] {
            font-size: 1rem;
        }
    
        & [data-brand] {
            font-size: ${14 / 16}rem;
            color: ${primary};
        }
    
        & [data-price] {
            font-size: 1rem;
            font-weight: bold;
        }
    }

    @keyframes botTopAnim {
        0%   {transform: translateY(100px);}
        100% {transform: translateY(0px);}
    }
`;

export const animationCard = css`
 
`;
