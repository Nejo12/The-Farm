import React from "react";
import { withRouter } from "react-router-dom";

import { StyledMenuItem } from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <StyledMenuItem
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></div>
    <div className="content">
      <h1 className="title">{title} </h1>
      <span className="subtitle">Shop Now</span>
    </div>
  </StyledMenuItem>
);

export default withRouter(MenuItem);
