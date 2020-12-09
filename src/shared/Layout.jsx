import React from 'react';
import {
  Link, Route, Switch,
} from 'react-router-dom';
import loadable from '@loadable/component';
import { Helmet } from 'react-helmet';
import { mainContainer, headerContainer } from './style';

function Status({ code, children }) {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) staticContext.status = code;
      return children;
    }}
    />
  );
}

function NotFound() {
  return (
    <Status code={404}>
      <div>
        <h1>Sorry, can’t find that.</h1>
      </div>
    </Status>
  );
}

const CatalogPage = loadable(() => import(/* webpackChunkName: "catalog-page" , webpackPrefetch: true */ '../pages/Catalog'));
const PDPPage = loadable(() => import(/* webpackChunkName: "about-page", webpackPrefetch: true */ '../pages/PDP'));
const App = () => (
  <>
    <div className={headerContainer}>
      Evercommerce
    </div>
    <div className={mainContainer}>
      <Helmet>
        <title>Evercommerce</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600&family=Montserrat:ital,wght@0,600;0,700;1,400&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <Switch>
        <Route exact path="/" component={CatalogPage} />
        <Route path="/detail/:productID" component={PDPPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </>
);

export default App;
