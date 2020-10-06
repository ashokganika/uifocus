import { IS_LOADING, PRODUCT_LIST } from "../../actionTypes";

export const productList = () => async (dispatch) => {
  dispatch(isLoadingAction(true));
  try {
    const response = await fetch("http://localhost:3001/api", {
      method: "GET",
    });
    const productData = await response.json();
    dispatch({
      type: PRODUCT_LIST,
      payload: productData,
    });
  } catch (error) {
    console.log("error", error);
  }
  dispatch(isLoadingAction(false));
};

const isLoadingAction = (isLoading) => ({
  type: IS_LOADING,
  payload: isLoading,
});
