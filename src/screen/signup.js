import React from "react";
import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikTextField from "../component/FormikTextField";
import FormikRadioFeild from "../component/formikRadioFeild";
import FormikCheckBoxField from "../component/formikCheckBoxField";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    marginTop: theme.spacing(4),
    width: theme.spacing(50),
    padding: theme.spacing(4),
  },
  gridContainer: {
    backgroundColor: "#ff5252",
  },
  dividerStyle: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
}));

const intitalVlaues = {
  name: "",
  email: "",
  address: "",
  password: "",
  profession: "",
  gender: "",
  agree: false,
};
const validationSchema = Yup.object({
  name: Yup.string().required("name is required "),
  email: Yup.string()
    .email("Invalid Email address")
    .required("email is required"),
  address: Yup.string().required("address is required"),
  password: Yup.string()
    .min(3, "atlease 3 character long password")
    .required("password is required"),
  profession: Yup.string().required("profession is required "),
  gender: Yup.string()
    .oneOf(["male", "female"], "choose a gender")
    .required("required"),
  agree: Yup.boolean()
    .required("agree to sign up")
    .oneOf([true], "accept the terms and conditions"),
});

const onSubmit = (values, { setSubmitting }) => {
  alert(JSON.stringify(values, null, 3));
  setSubmitting(false);
};

function Signup() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.gridContainer}
    >
      <Grid item xs={12} sm={6}>
        <Paper elevation={10} className={classes.paperStyle}>
          <Typography variant="h4">Sign Up</Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            Please fill this form to create an acccount
          </Typography>
          <Divider
            variant="fullWidth"
            light={true}
            className={classes.dividerStyle}
          />
          <Formik
            initialValues={intitalVlaues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isValid, dirty, values }) => (
              <Form>
                <FormikTextField
                  label="Name"
                  name="name"
                  type="text"
                  required={true}
                  values
                />
                <FormikTextField
                  label="Email"
                  name="email"
                  type="text"
                  required={true}
                  values
                />
                <FormikTextField
                  label="Address"
                  name="address"
                  required={true}
                  values
                />
                <FormikTextField
                  label="Password"
                  name="password"
                  type="password"
                  required={true}
                  values
                />
                <FormikTextField
                  label="Profession"
                  name="profession"
                  type="profession"
                  required={true}
                  values
                />
                <FormikRadioFeild
                  Mainlabel="Gender"
                  name="gender"
                  required={true}
                  label={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                />
                <FormikCheckBoxField
                  name="agree"
                  label="Agreee to accpet the terms"
                  values
                  required={true}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={!dirty || !isValid}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Signup;
