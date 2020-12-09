import React, { useEffect, useState } from 'react';
import { getProducts } from '@shared/api';
import ProductCard from './components/ProductCard/index';
import ProductLoader from './components/Placeholder/index';
import { containerList, headerTitle, wrapper } from './style';

const placeholder = [1, 2, 3, 4, 5, 6];
const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [params, setParams] = useState({ page: 1, limit: 20 });

  const fetchProduct = () => {
    setIsLoading(true);
    getProducts(params).then((d) => {
      const tempProduct = [...products, ...d.data];
      setProducts(tempProduct);
    }).finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchProduct();
  }, [params]);

  const fetchMore = () => {
    if (!isLoading && params.page <= 10 && (window.innerHeight + window.scrollY) >= (document.body.offsetHeight)) {
      const tempParams = { ...params };
      tempParams.page = params.page + 1;
      setParams(tempParams);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', fetchMore);

    return () => {
      window.removeEventListener('scroll', fetchMore);
    };
  }, [isLoading]);

  return (
    <div className={wrapper}>
      <div className={headerTitle}>
        <span data-title>Catalog</span>
        <span data-subtitle>5,768 produk</span>
      </div>
      <div className={containerList}>
        {products.map((p, i) => <ProductCard key={p.id + i} {...p} />)}
        {isLoading && placeholder.map((p, idx) => <ProductLoader key={p + idx} />)}
      </div>
    </div>
  );
};

export default Home;
