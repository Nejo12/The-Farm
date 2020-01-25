import React from "react";

import { StyledHomeImage, StyledContent } from "./home-image.styles";

const HomeImage = () => (
  <StyledHomeImage>
    <StyledContent className="home-image-content">
      <div className="home-image-text">
        <h1>
          Welcome to the <span>Farm</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          tenetur voluptatibus soluta rem!
        </p>
      </div>
    </StyledContent>
  </StyledHomeImage>
);

export default HomeImage;
