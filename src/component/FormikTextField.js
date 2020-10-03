import React from "react";
import { ErrorMessage, Field } from "formik";
import { makeStyles, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  errorMsg: {
    color: "red",
  },
});

function FormikTextField({ label, name, required = false, type, values }) {
  const classes = useStyles();
  return (
    <Field
      as={TextField}
      autoComplete="off"
      label={label}
      type={type}
      name={name}
      required={required}
      value={values.name}
      helperText={<ErrorMessage name={name} className={classes.errorMsg} />}
      margin="dense"
      fullWidth
      variant="outlined"
    />
  );
}

export default FormikTextField;
