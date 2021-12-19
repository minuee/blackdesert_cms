import React, { useState, useEffect, useContext } from "react";

// material-ui
import { Grid } from "@material-ui/core";

// styled-component
import { makeStyles } from "@material-ui/core/styles";

import BackgroundImage from "images/layouts/accounts/background.jpeg";

import LoadingProgress from "components/loading-progress";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0 auto",
    [theme.breakpoints.up("xl")]: {
      maxWidth: "1920px",
    },
  },
  imageContainer: {
    position: "absolute",
    [theme.breakpoints.up("md")]: {
      position: "unset",
    },
  },
  foreGround: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  inputContainer: {
    width: "400px",
    margin: "16px",
    padding: "40px 16px",
    background: "rgba(265,265,265,0.8)",
    "& .MuiInputBase-root": {
      background: "#ffffff",
    },
  },

  backGround: {
    width: "100vw",
    height: "100vh",
    position: "relative",
    "&::before ": {
      content: '""',
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      position: "absolute",
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      backgroundPositionX: "20%",
      backgroundPositionY: "center",
      // filter: "grayscale(100%)",
      // backgroundColor: theme.palette.primary.main,
    },
    "& >img": {
      position: "absolute",
      top: 96,
      left: 72,
      width: 137,
      height: 90,
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      width: 600,
    },
  },
}));

const AccountsLayout = (props) => {
  const classes = useStyles();

  return (
    // <div className={classes.backgroundImageTest}></div>;

    <div className={classes.container}>
      <LoadingProgress />
      <Grid container>
        <Grid item xs={12} md={6} lg={3} className={classes.imageContainer}>
          <div className={classes.backGround}>{/* <img src={LogoImage} /> */}</div>
        </Grid>
        <Grid item xs={12} md={6} lg={9} className={classes.foreGround}>
          <div className={classes.inputContainer}>{props.children}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountsLayout;
