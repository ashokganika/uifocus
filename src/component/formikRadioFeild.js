import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import { ErrorMessage, Field } from "formik";

const RadioField = ({ name, Mainlabel, onChange, onBlur, errorMsg, label }) => (
  <FormControl component="fieldset">
    <FormLabel component="legend">{Mainlabel}</FormLabel>
    <RadioGroup
      aria-label="quiz"
      name={name}
      onChange={onChange}
      onBlur={onBlur}
    >
      {label.map((item) => (
        <FormControlLabel
          key={item.value}
          value={item.value}
          control={<Radio />}
          label={item.label}
        />
      ))}
    </RadioGroup>
    <FormHelperText>{errorMsg}</FormHelperText>
  </FormControl>
);

function FormikRadioFeild({ Mainlabel, name, label, required = false }) {
  return (
    <Field
      as={RadioField}
      name={name}
      Mainlabel={Mainlabel}
      required={required}
      errorMsg={<ErrorMessage name={name} />}
      label={label}
    ></Field>
  );
}

export default FormikRadioFeild;
