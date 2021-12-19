import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    fontWeight: (props) => props.fontWeight,
    color: (props) => props.color,
    fontSize: (props) => props.fontSize,
  },
}));

const CustomizedTypography = (props) => {
  const classes = useStyles({
    fontWeight: props?.fontWeight,
    color: props?.color,
    fontSize: props?.fontSize,
  });
  return <Typography classes={classes} {...props} />;
};

export default CustomizedTypography;
