import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import isErrorAction from "../redux/action/errorAction";

function ErrorDialougeBox() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.error);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(isErrorAction(false, state.errorMsg, state.errorSeverity));
  };
  return (
    <Snackbar
      open={state.isError}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={state.errorSeverity}>
        {state.errorMsg}
      </Alert>
    </Snackbar>
  );
}

export default ErrorDialougeBox;
