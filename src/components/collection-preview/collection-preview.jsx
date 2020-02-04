import React from "react";
import { withRouter } from "react-router-dom";

import {
  CollectionPreviewContainerStyles,
  CollectionPreviewStyles,
  CollectionPreviewTitleStyles
} from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items, match, history, routeName }) => (
  <CollectionPreviewContainerStyles>
    <CollectionPreviewTitleStyles
      onClick={() => history.push(`${match.url}/${routeName}`)}
    >
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

export default withRouter(CollectionPreview);
