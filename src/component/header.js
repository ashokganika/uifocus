import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter } from "react-router-dom";
import { Button, useMediaQuery } from "@material-ui/core";

const menutItemDetail = [
  {
    itemName: "Home",
    itemUrl: "/",
  },
  {
    itemName: "Blog",
    itemUrl: "/blog",
  },
  {
    itemName: "About Us",
    itemUrl: "/about-us",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  menuItem: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
  },
}));

function Header({ history }) {
  const classes = useStyles();
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (newUrl, screenSize) => {
    newUrl && history.push(newUrl);
    screenSize && setAnchorEl(null);
    screenSize && console.log("i am rendered at small screen only");
  };

  return (
    <div className={classes.root}>
      {console.log("i am rendering")}

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>

          {isExtraSmall ? (
            <>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menutItemDetail.map(({ itemName, itemUrl }) => (
                  <MenuItem
                    onClick={() => handleClose(itemUrl, "true")}
                    key={itemName}
                  >
                    {itemName}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <div className={classes.menuItem}>
              {menutItemDetail.map(({ itemName, itemUrl }) => (
                <Button
                  key={itemName}
                  variant="contained"
                  onClick={() => handleClose(itemUrl, null)}
                >
                  {itemName}
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);
