import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import Collection from "../collection/collection";
import { updateCollections } from "../../redux/shop/shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import { StyledShop } from "./shop.styles";

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;

    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async snapShot => {
      // console.log(snapShot);
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
      // console.log(collectionsMap);
      updateCollections(collectionsMap);
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

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(Shop);
