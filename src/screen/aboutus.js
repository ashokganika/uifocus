import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import UnSplash, { toJson } from "unsplash-js";
import LazyLoad from "react-lazyload";

const unsplash = new UnSplash({
  accessKey: "P9ecXD_B5I0GzIX3dFGt4O2Fp7kdnh_hPwahkC8vqog",
  secret: "N0CQwwpCgGBxGNPNrzVF7EfmIhmTWhp5-s2L9IVNdv0",
});

const useStyles = makeStyles((theme) => ({
  itemGridContainer: {
    marginTop: theme.spacing(1),
  },
  paperStyle: {
    height: "100%",
  },
}));

export default function Aboutus({ searchAbout }) {
  const [dogState, setDogState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      unsplash.search
        .photos(searchAbout, 1, 30)
        .then(toJson)
        .then((data) => {
          setDogState(data.results);
        });
      setIsLoading(false);
    }, 100);
  }, [searchAbout]);
  return (
    <div>
      {isLoading ? (
        <h2>Loading....</h2>
      ) : (
        <Grid container>
          {console.log(dogState)}
          <Grid item xs={1} sm={2}></Grid>
          <Grid
            item
            xs={10}
            sm={8}
            container
            justify="space-between"
            spacing={3}
            className={classes.itemGridContainer}
          >
            {dogState &&
              dogState.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Paper square elevation={3} className={classes.paperStyle}>
                    <Card className={classes.paperStyle}>
                      <LazyLoad height={200} once>
                        <CardMedia
                          image={item.urls.full}
                          title="dogs"
                          style={{ height: 0, paddingTop: "56.25%" }}
                        />
                      </LazyLoad>

                      <CardContent>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          align="center"
                        >
                          {item.alt_description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Paper>
                </Grid>
              ))}
          </Grid>
          <Grid item xs={1} sm={2}></Grid>
        </Grid>
      )}
    </div>
  );
}
