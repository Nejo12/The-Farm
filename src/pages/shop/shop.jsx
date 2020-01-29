import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import Collection from "../collection/collection";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import { StyledShop } from "./shop.styles";

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapShot => {
      // console.log(snapShot);
      convertCollectionsSnapshotToMap(snapShot);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <StyledShop>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
      </StyledShop>
    );
  }
}

export default Shop;
