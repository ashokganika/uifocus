const { IS_ERROR } = require("../../actionTypes");

const initialState = {
  isError: false,
  errorMsg: "",
  errorSeverity: "",
};

const errorReducer = (state = initialState, action) => {
  const { isError, errorMsg, errorSeverity } = action;
  switch (action.type) {
    case IS_ERROR:
      return {
        ...state,
        isError,
        errorMsg,
        errorSeverity,
      };
    default:
      return { ...state };
  }
};

export default errorReducer;
