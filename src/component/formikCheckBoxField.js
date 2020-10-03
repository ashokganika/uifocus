import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import { ErrorMessage, Field } from "formik";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  checkBoxForm: {
    margin: theme.spacing(2),
  },
}));
const MuiCheckBox = ({ values, name, onChange, onBlur, label, errorMsg }) => {
  const classes = useStyles();
  return (
    <FormControl component="fieldset" className={classes.checkBoxForm}>
      <FormControlLabel
        control={
          <Checkbox
            checked={values.name}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
          />
        }
        label={label}
      />
      <FormHelperText>{errorMsg}</FormHelperText>
    </FormControl>
  );
};

function FormikCheckBoxField({ name, label, required = false, values }) {
  return (
    <Field
      as={MuiCheckBox}
      name={name}
      label={label}
      errorMsg={<ErrorMessage name={name} />}
      values
      required={required}
    />
  );
}

export default FormikCheckBoxField;
