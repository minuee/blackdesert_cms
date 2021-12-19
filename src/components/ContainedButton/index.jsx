import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  contained: {
    backgroundColor: (props) => props.backgroundColor,
  },
}));

const ContainedButton = (props) => {
  const classes = useStyles({ backgroundColor: props.color });
  return <Button {...props} classes={classes} variant="contained" />;
};

export default ContainedButton;
