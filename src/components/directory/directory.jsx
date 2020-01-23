import React from "react";

import MenuItem from "../menu-item/menu-item";

import { StyledDirectory } from "./directory.styles";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Vegetables",
          imageUrl: "https://i.ibb.co/xYQNKvG/vegetables.jpg",
          id: 1,
          linkUrl: "shop"
        },

        {
          title: "Fruits",
          imageUrl: "https://i.ibb.co/4mrd46D/fruits.jpg",
          id: 2,
          linkUrl: "shop"
        },
        {
          title: "Cereals",
          imageUrl: "https://i.ibb.co/fCW4dq0/cereals.jpg",
          id: 3,
          linkUrl: "shop"
        },
        {
          title: "Diary",
          imageUrl: "https://i.ibb.co/mXRFyTk/diary-cow.jpg",
          id: 4,
          linkUrl: "shop",
          size: "large"
        },
        {
          title: "Spices",
          imageUrl: "https://i.ibb.co/KVYVRyV/spices.jpg",
          id: 5,
          linkUrl: "shop",
          size: "large"
        }
      ]
    };
  }

  render() {
    return (
      <StyledDirectory className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </StyledDirectory>
    );
  }
}

export default Directory;
