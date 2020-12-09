import React from 'react';
import { Link } from 'react-router-dom';
import { number, string } from 'prop-types';
import { productContainer } from './style';

const ProductCard = (props) => {
  const {
    title, price, category, image, id,
  } = props;

  return (
    <Link to={`/detail/${id}`}>
      <div className={productContainer} data-product>
        <img src={image} alt={title} />
        <div className="detailContainer">
          <span data-name>{title}</span>
          <span data-brand>{category}</span>
          <span data-price>{price}</span>
        </div>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  id: number.isRequired,
  title: string.isRequired,
  price: string.isRequired,
  category: string.isRequired,
  image: string.isRequired,
};

export default ProductCard;
