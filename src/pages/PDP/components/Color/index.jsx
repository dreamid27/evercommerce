import React, { useContext } from 'react';
import { string } from 'prop-types';
import PDPContext from '../../context';
import { colorContainer } from './style';

const Color = ({ hex }) => {
  const { color, setColor } = useContext(PDPContext);

  const updateColor = () => {
    setColor(hex);
  };

  const isSelected = hex === color;

  return (
    <div onClick={updateColor} className={colorContainer(hex, isSelected)} data-color>
      <div className="outer" />
    </div>
  );
};

Color.propTypes = {
  hex: string.isRequired,
};

export default Color;
