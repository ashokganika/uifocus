import { IS_ERROR } from "../../actionTypes";

const isErrorAction = (isError, errorMsg, errorSeverity) => {
  return {
    type: IS_ERROR,
    isError,
    errorMsg,
    errorSeverity,
  };
};

export default isErrorAction;
