import React from "react";
import { StyledCollectionItem } from "./collection-item.styles";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <StyledCollectionItem className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </StyledCollectionItem>
  );
};

export default CollectionItem;
