import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { CircularProgress } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// redux
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.modal + 1,
    color: "#fff",
  },
}));

export default function SimpleBackdrop() {
  const classes = useStyles();
  const reducer = useSelector((state) => state.reducer);

  return (
    <div>
      <Backdrop className={classes.backdrop} open={reducer.isLoading}>
        <CircularProgress color="primary" />
      </Backdrop>
    </div>
  );
}
