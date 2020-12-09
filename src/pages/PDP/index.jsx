/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getProduct } from '@shared/api';
import Placeholder from './components/Placeholder';
import {
  detailContainer, galleryContainer, descContainer, backButton, imageContainer,
} from './style';
import ButtonATC from './components/ButtonATC';
import Color from './components/Color';
import Quantity from './components/Quantity';
import PDPContext from './context';

const colors = ['#1abc9c', '#2ecc71', '#3498db', '#2c3e50', '#2c3e50'];

const PDP = () => {
  const history = useHistory();
  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActIndex] = useState(0);
  const [activeImageUrl, setActiveImageUrl] = useState('');

  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    getProduct(productID).then((prod) => {
      const tmpProduct = prod.data;
      setProduct(tmpProduct);
      setIsLoading(false);
      setActiveImageUrl(tmpProduct.imageList[0]);
    });
  }, []);

  const changeMainImage = (url, i) => {
    setActIndex(i);
    setActiveImageUrl(url);
  };

  const addToCard = () => {
    alert('Produk berhasil di masukan kedalam cart');
  };

  return (
    <PDPContext.Provider value={{
      quantity, color, updateQuantity: setQuantity, setColor,
    }}
    >
      <div className={detailContainer}>
        <div className={backButton} onClick={history.goBack}>
          <i className="material-icons">arrow_back</i>
        </div>
        {isLoading && <Placeholder />}
        {!isLoading && (
        <>
          <div className={imageContainer}>
            <img src={activeImageUrl} alt="product" />
            <div className={galleryContainer}>
              {product.imageList.map((prod, i) => <img data-active={i === activeImageIndex} key={prod.name + i} src={prod} alt={product.title} onClick={() => changeMainImage(prod, i)} />)}
            </div>
          </div>
          <div className={descContainer}>
            <div className="dataPrice">{product.price}</div>
            <div className="dataName">{product.title}</div>
            <div className="containerControl">
              <div className="variantContainer">
                <div data-title>Warna :</div>
                <div data-container>
                  {product.color.map((col, i) => <Color hex={col.hex} key={col.id + i} />)}
                </div>
              </div>
              <div className="quantityContainer">
                <div data-title>Qty :</div>
                <div data-container>
                  <Quantity />
                </div>
              </div>
            </div>
            <ButtonATC onClick={addToCard} />
            <div className="description">
              <div data-title>Deskripsi</div>
              <div data-desc>
                {product.description}
              </div>
            </div>
          </div>
        </>
        )}
      </div>
    </PDPContext.Provider>
  );
};
export default PDP;
