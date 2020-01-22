import React from "react";
import { StyledMenuItem } from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size }) => (
  <StyledMenuItem className={`${size} menu-item`}>
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

export default MenuItem;
