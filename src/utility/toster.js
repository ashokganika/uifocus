import React from "react";
const { Snackbar } = require("@material-ui/core");

const Toaster = ({ message }) => {
  return <Snackbar>{message}</Snackbar>;
};

export default Toaster;
