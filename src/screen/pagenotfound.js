import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  gridBackground: {
    backgroundColor: "white",
  },
  gridItemBackground: {
    backgroundColor: "dodgerblue",
  },
});

export default function Pagenotfound() {
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "gray", height: "100vh", marginTop: "5px" }}>
      <Grid
        className={classes.gridBackground}
        container
        justify="center"
        direction="row"
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h3">404 </Typography>
          <Typography variant="h4">Page not found </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
