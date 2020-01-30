import ShopActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null
};

const shopCollections = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};

export default shopCollections;
