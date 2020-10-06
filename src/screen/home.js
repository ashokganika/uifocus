import { Snackbar } from "@material-ui/core";
import React from "react";

export default function Home(props) {
  return (
    <div>
      Welcome to our web site.
      <Snackbar message="something went worng" />
    </div>
  );
}
