import React from 'react';
import {buttonPrimary} from '@shared/style.js';
import { func} from 'prop-types';

const ButtonATC = ({onClick}) => 
<button className={buttonPrimary} onClick={onClick}>
    Tambahkan Ke Keranjang
</button>

ButtonATC.propTypes = {
    onClick: func.isRequired
}

export default ButtonATC;