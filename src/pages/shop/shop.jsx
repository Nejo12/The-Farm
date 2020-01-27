import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import Collection from "../collection/collection";

import { StyledShop } from "./shop.styles";

const Shop = ({ match }) => {
  console.log(match);
  return (
    <StyledShop>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </StyledShop>
  );
};

export default Shop;
