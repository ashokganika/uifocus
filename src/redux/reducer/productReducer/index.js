import { IS_LOADING, PRODUCT_LIST } from "../../actionTypes";

const intialStates = {
  isLoading: false,
  data: [],
};

const ProductReducer = (state = intialStates, action) => {
  switch (action.type) {
    case PRODUCT_LIST:
      return { ...state, data: action.payload };
    case IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return { ...state };
  }
};

export default ProductReducer;
