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
          linkUrl: "farm",
          info:
            "Checkout our major varieties of Vegetable. Fresh and nutrituous."
        },

        {
          title: "Fruits",
          imageUrl: "https://i.ibb.co/4mrd46D/fruits.jpg",
          id: 2,
          linkUrl: "farm",
          info:
            "Our fruits are natural. Without artificials or junks. Always FRESH."
        },
        {
          title: "Cereals",
          imageUrl: "https://i.ibb.co/fCW4dq0/cereals.jpg",
          id: 3,
          linkUrl: "farm",
          info: "Major varieties of cereals & nuts. Raw or processed."
        },
        {
          title: "Spices?",
          imageUrl: "https://i.ibb.co/KVYVRyV/spices.jpg",
          id: 4,
          linkUrl: "farm",
          info: "No need to go to Africa nor India. We've got you covered."
          // size: "large"
        },
        {
          title: "Diary",
          imageUrl: "https://i.ibb.co/FXP5G6g/milk.jpg",
          id: 5,
          linkUrl: "farm",
          info: "We provide sorts of Diary products. Raw or processed."
          // size: "large"
        },
        {
          title: "Livestocks",
          imageUrl: "https://i.ibb.co/tJnsNr4/Cows.jpg",
          id: 6,
          linkUrl: "farm",
          info:
            "We provide livestock varieties. Alive, processed or spiced as desired."
          // size: "large"
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
