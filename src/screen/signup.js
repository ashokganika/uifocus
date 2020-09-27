import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Grid, Typography } from "@material-ui/core";

export default function Signup() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid Email address").required("required"),
        password: Yup.string()
          .min(4, "At least 4 characters long password")
          .required("required"),
      })}
      onSubmit={(values) => {
        console.log(values);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {(formik) => (
        <Grid container direction="column" alignContent="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="h3" align="center">
              Sign Up to create you account
            </Typography>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="text"
                {...formik.getFieldProps("email")}
              />{" "}
              <br />
              {formik.errors.email && formik.touched.email && (
                <small style={{ color: "red" }}>{formik.errors.email}</small>
              )}
              <br />
              <br />
              <label htmlFor="password">Set Password</label>
              <input
                id="password"
                type="password"
                {...formik.getFieldProps("password")}
              />{" "}
              <br />
              {formik.errors.password && formik.touched.password && (
                <small style={{ color: "red" }}>{formik.errors.password}</small>
              )}
              <br />
              <br />
              <Button variant="contained" type="submit">
                Register
              </Button>
            </form>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
}
