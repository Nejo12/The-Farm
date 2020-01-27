const INITIAL_STATE = {
  sections: [
    {
      title: "Vegetables",
      imageUrl: "https://i.ibb.co/xYQNKvG/vegetables.jpg",
      id: 1,
      linkUrl: "shop/vegetables",
      info: "Checkout our major varieties of Vegetable. Fresh and nutrituous."
    },

    {
      title: "Fruits",
      imageUrl: "https://i.ibb.co/4mrd46D/fruits.jpg",
      id: 2,
      linkUrl: "shop/fruits",
      info:
        "Our fruits are natural. Without artificials or junks. Always FRESH."
    },
    {
      title: "Cereals",
      imageUrl: "https://i.ibb.co/fCW4dq0/cereals.jpg",
      id: 3,
      linkUrl: "shop/cereals",
      info: "Major varieties of cereals & nuts. Raw or processed."
    },
    {
      title: "Spices?",
      imageUrl: "https://i.ibb.co/KVYVRyV/spices.jpg",
      id: 4,
      linkUrl: "shop/spices",
      info: "No need to go to Africa nor India. We've got you covered."
    },
    {
      title: "Diary",
      imageUrl: "https://i.ibb.co/FXP5G6g/milk.jpg",
      id: 5,
      linkUrl: "shop/diaries",
      info: "We provide sorts of Diary products. Raw or processed."
    },
    {
      title: "Livestocks",
      imageUrl: "https://i.ibb.co/tJnsNr4/Cows.jpg",
      id: 6,
      linkUrl: "shop/livestocks",
      info:
        "We provide livestock varieties. Alive, processed or spiced as desired."
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
