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
          linkUrl: "shop/vegetables"
        },

        {
          title: "Fruits",
          imageUrl: "https://i.ibb.co/4mrd46D/fruits.jpg",
          id: 2,
          linkUrl: "shop/fruits"
        },
        {
          title: "Cereals",
          imageUrl: "https://i.ibb.co/fCW4dq0/cereals.jpg",
          id: 3,
          linkUrl: "shop/cereals"
        },
        {
          title: "Diary",
          imageUrl: "https://i.ibb.co/mXRFyTk/diary-cow.jpg",
          id: 4,
          linkUrl: "shop/diary",
          size: "large"
        },
        {
          title: "Spices",
          imageUrl: "https://i.ibb.co/KVYVRyV/spices.jpg",
          id: 5,
          linkUrl: "shop/spices",
          size: "large"
        }
      ]
    };
  }

  render() {
    return (
      <StyledDirectory className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </StyledDirectory>
    );
  }
}

export default Directory;
