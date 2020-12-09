/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ContentLoader from 'react-content-loader';
import { container } from './style';

const productPlaceholder = (props) => (
  <div className={container}>
    <ContentLoader
      speed={2}
      width="100%"
      viewBox="0 0 130 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      preserveAspectRatio="none"
      {...props}
    >
      <rect x="0" y="140" rx="3" ry="3" width="120" height="15" />
      <rect x="0" y="0" rx="3" ry="3" width="130" height="130" />
      <rect x="0" y="160" rx="5" ry="5" width="96" height="15" />
      <rect x="0" y="180" rx="5" ry="5" width="90" height="20" />
    </ContentLoader>
  </div>

);

export default productPlaceholder;
