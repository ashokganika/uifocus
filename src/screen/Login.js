import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField } from "formik-material-ui";
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  LinearProgress,
} from "@material-ui/core";

function Login() {
  const [click, setclick] = useState(0);

  return (
    <Grid container alignItems="center" direction="column">
      {console.log("i am rendering from LOGIN")}
      <Grid item xs={12} sm={6}>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object({
            email: Yup.string().email("invalid email address").required(),
            password: Yup.string()
              .min(3, "must be atleast 3 characters")
              .required(),
          })}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.setSubmitting(false);
            alert(JSON.stringify(values, null, 3));
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <Field
                component={TextField}
                id="email"
                type="email"
                label="Email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email && (
                <small style={{ color: "red" }}>{formik.errors.email}</small>
              )}
              <br />
              <Field
                component={TextField}
                id="apssword"
                type="password"
                label="Password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password && (
                <small style={{ color: "red" }}>{formik.errors.password}</small>
              )}
              <br />
              {formik.isSubmitting && <LinearProgress />}
              <Button
                variant="contained"
                color="primary"
                disabled={formik.isSubmitting}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setclick(click + 1)}
        >
          Increment
        </Button>
      </Grid>
    </Grid>
  );
}

export default Login;
