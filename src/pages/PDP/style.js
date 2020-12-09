import { css } from '@emotion/css';
import { desktopDevice } from '@shared/responsive';
import { white } from '../../shared/color';

export const detailContainer = css`
    padding: 0px;
    width: 100%;
    position: relative;

    ${desktopDevice(css`
        display: flex;
        flex-direction: row;
    `)}
    & img {
        width: 100%;
    }
`;

export const galleryContainer = css`
    width: 100%;
    display: flex;
    overflow: auto;
    padding: 14px 25px 26px;
    margin-bottom: 26px;

    & img {
        opacity: 0.7;
        cursor: pointer;
        max-width: 65px;
        width: 20%;
        border-radius: 10px;
        box-shadow: 0px 0px 9px 0px rgb(227 227 227 / 75%);
        margin-right: 10px;
        transition: all .25s ease-in-out;
    }

    & img[data-active=true] {
        opacity: 1;
        border: solid 1px #000;
    }
`;

export const titleStyle = css`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 8px;
`;

export const descContainer = css`
    padding: 0 20px;
    ${desktopDevice(css`
        margin-left: 40px;
        width: 45%;
    `)}


    button {
        width: 100%;
    }

    & .dataPrice {
        font-size: ${24 / 16}rem;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
    }
    & .dataName {
        font-size: 18px;
        color: #595959;
        margin-bottom: 12px;
    }

    & .containerControl {
        display: flex;
        margin-bottom: 28px;
    }

    & .variantContainer {
        & [data-title] {
            ${titleStyle};
        }

        & [data-container] {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            & [data-color] {
                margin-right: 8px;
            }
        }
    }

    & .quantityContainer {
        margin-left: 40px;
        & [data-title] {
            ${titleStyle};
        }

        & [data-container] {
            display: flex;
            flex-direction: row;
        }
    }

    

    & .description {
        padding-top: 30px;

        & [data-title] {
            ${titleStyle};
        }

        & [data-desc] {
            font-size: 14px;
            line-height: 24px;
            color: #595959;
        }
    }
`;

export const backButton = css`
    left: 10px;
    top: 10px;
    position: absolute;
    width: 28px;
    height: 28px;
    background: #a8a8a8;
    color: ${white};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    cursor: pointer;
`;

export const imageContainer = css`
    ${desktopDevice(css`
        width: 40%;
    `)}
`;
