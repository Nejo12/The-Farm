import React from "react";

import {
  HomeImageContainer,
  HomeImageContent,
  HomeImageText
} from "./home-image.styles";

const HomeImage = () => (
  <HomeImageContainer>
    <HomeImageContent>
      <HomeImageText>
        <h1>
          Welcome to the <span>Farm</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          tenetur voluptatibus soluta enetur voluptatibus soluta rem!
        </p>
      </HomeImageText>
    </HomeImageContent>
  </HomeImageContainer>
);

export default HomeImage;
