import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  MenuItemContent,
  MenuItemTitle
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, info, history, match, linkUrl }) => (
  <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
    <MenuItemContent>
      <MenuItemTitle>{title} </MenuItemTitle>
      <p>{info}</p>
    </MenuItemContent>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
