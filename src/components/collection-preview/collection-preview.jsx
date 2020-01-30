import React from "react";

import {
  CollectionPreviewContainerStyles,
  CollectionPreviewStyles,
  CollectionPreviewTitleStyles
} from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items, match }) => (
  <CollectionPreviewContainerStyles>
    <CollectionPreviewTitleStyles>
      {title.toUpperCase()}
    </CollectionPreviewTitleStyles>
    <CollectionPreviewStyles>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </CollectionPreviewStyles>
  </CollectionPreviewContainerStyles>
);

export default CollectionPreview;
