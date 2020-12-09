import React from 'react';
import ContentLoader from 'react-content-loader';
import { container } from './style';

const MyLoader = (props) => (
  <>
    <div className={container} data-mobile>
      <ContentLoader
        speed={2}
        width="100%"
        height="100%"
        viewBox="0 0 280 600"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="140" rx="3" ry="3" width="120" height="15" />
        <rect x="0" y="1" rx="4" ry="4" width="280" height="280" />
        <rect x="0" y="160" rx="5" ry="5" width="96" height="15" />
        <rect x="0" y="180" rx="5" ry="5" width="90" height="20" />
        <rect x="0" y="300" rx="4" ry="4" width="60" height="60" />
        <rect x="70" y="300" rx="4" ry="4" width="60" height="60" />
        <rect x="140" y="300" rx="4" ry="4" width="60" height="60" />
        <rect x="210" y="300" rx="4" ry="4" width="60" height="60" />
        <rect x="0" y="434" rx="4" ry="4" width="280" height="40" />
        <rect x="0" y="372" rx="4" ry="4" width="168" height="20" />
        <rect x="0" y="402" rx="4" ry="4" width="223" height="20" />
        <rect x="0" y="501" rx="4" ry="4" width="223" height="20" />
        <rect x="0" y="545" rx="4" ry="4" width="223" height="15" />
        <rect x="0" y="573" rx="4" ry="4" width="294" height="15" />
      </ContentLoader>
    </div>
    <div className={container} data-desktop>
      <ContentLoader
        speed={2}
        width={600}
        height={360}
        viewBox="0 0 600 360"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <rect x="0" y="140" rx="3" ry="3" width="120" height="15" />
        <rect x="0" y="1" rx="4" ry="4" width="280" height="280" />
        <rect x="0" y="160" rx="5" ry="5" width="96" height="15" />
        <rect x="0" y="180" rx="5" ry="5" width="90" height="20" />
        <rect x="0" y="300" rx="4" ry="4" width="60" height="60" />
        <rect x="70" y="300" rx="4" ry="4" width="60" height="60" />
        <rect x="140" y="300" rx="4" ry="4" width="60" height="60" />
        <rect x="210" y="300" rx="4" ry="4" width="60" height="60" />
        <rect x="315" y="74" rx="4" ry="4" width="280" height="40" />
        <rect x="315" y="3" rx="4" ry="4" width="168" height="20" />
        <rect x="315" y="36" rx="4" ry="4" width="223" height="20" />
        <rect x="315" y="133" rx="4" ry="4" width="223" height="20" />
        <rect x="315" y="168" rx="4" ry="4" width="223" height="15" />
        <rect x="315" y="204" rx="4" ry="4" width="294" height="15" />
      </ContentLoader>
    </div>
  </>
);

export default MyLoader;
