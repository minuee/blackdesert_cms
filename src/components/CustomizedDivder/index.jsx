import React from "react";
import { Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: (props) => theme.spacing(props.my),
    marginBottom: (props) => theme.spacing(props.my),
    marginRight: (props) => theme.spacing(props.mx),
    marginLeft: (props) => theme.spacing(props.mx),

    backgroundColor: (props) => props.color,
    // width: (props) => props.width,
    // height: (props) => props.height,
  },
}));

const CustomizedDivider = (props) => {
  const classes = useStyles({
    my: props?.my,
    mx: props?.mx,
    color: props?.color,

    // width: props?.width,
    // height: props?.height,
  });
  return <Divider classes={classes} {...props} />;
};

export default CustomizedDivider;
