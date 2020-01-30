import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item";

import { selectCollection } from "../../redux/shop/shop.selectors";

import {
  CollectionContainerStyles,
  CollectionTitleStyles,
  CollectionItemsStyles
} from "./collection.styles";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionContainerStyles>
      <CollectionTitleStyles>{title}</CollectionTitleStyles>
      <CollectionItemsStyles>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsStyles>
    </CollectionContainerStyles>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
