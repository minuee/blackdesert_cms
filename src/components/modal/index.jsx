import React, { useState, useEffect, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    background: theme.palette.grey[700],
    color: theme.palette.grey[50],
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[50],
  },
});

const useStyles = makeStyles((theme) => ({}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      {/* <Typography variant="h6"> */}
      {children}
      {/* </Typography> */}
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export const ModalWithOpenButton = (props) => {
  const { children, title, openButton, maxWidth } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <IconButton onClick={handleClickOpen}> */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          handleClickOpen();
        }}
      >
        {openButton}
        {/* <Button color="primary" variant="outlined" >
        투자정보확인
      </Button> */}
      </div>
      {/* </IconButton> */}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth={maxWidth ? maxWidth : "md"}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <Typography>{title}</Typography>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export const ModalOpenedByParent = (props) => {
  const { children, open, handleClose, title, maxWidth } = props;
  const classes = useStyles();

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      fullWidth
      maxWidth={maxWidth ? maxWidth : "md"}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <Typography>{title}</Typography>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};
