import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import CollectionPreview from "../collection-preview/collection-preview";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import { StyledCollectionsOverview } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <StyledCollectionsOverview>
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </StyledCollectionsOverview>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
