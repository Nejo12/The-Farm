import React from "react";
import { StyledCollectionItem } from "./collection-item.styles";
import Button from "../button/button";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <StyledCollectionItem className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button text="add to cart" inverted />
    </StyledCollectionItem>
  );
};

export default CollectionItem;
