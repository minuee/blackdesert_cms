import React, { useState } from "react";

// @material-ui/core
import { Grid, Box, Typography, Divider, IconButton, Paper, Collapse } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { makeStyles } from "@material-ui/core/styles";

import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  transition: {
    visibility: "visible",
    transition: theme.transitions.create("all", {
      duration: theme.transitions.duration.standard,
    }),
  },
  hide: {
    visibility: "hidden",
  },
  title: {
    cursor: "pointer",
    //   backgroundColor: theme.palette.info.light,
    //   color: theme.palette.info.contrastText,
    // boxShadow: theme.shadows[1],
  },
}));

export const CollapsedDetailCard = (props) => {
  const { title, bottom, children } = props;
  const classes = useStyles();

  const [expanded, setExpanded] = useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper elevation={2}>
      {title && (
        <Box py={1} px={2} onClick={handleExpandClick} className={classes.title}>
          <Grid container alignItems="center">
            {title}

            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Grid>
        </Box>
      )}
      {title && <Divider className={clsx(classes.transition, { [classes.hide]: !expanded })} />}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box px={2} py={4}>
          {children}
        </Box>
        {bottom && (
          <>
            <Divider className={clsx(classes.transition, { [classes.hide]: !expanded })} />
            <Box py={1} px={2}>
              <Grid container alignItems="center">
                {bottom}
              </Grid>
            </Box>
          </>
        )}
      </Collapse>
    </Paper>
  );
};

export const DetailCard = (props) => {
  const {
    // data, labelWidth
    title,
    children,
  } = props;

  return (
    <Paper elevation={2}>
      <Box py={1} px={2}>
        <Grid container alignItems="center">
          <Typography variant="h6" display="inline">
            {title}
          </Typography>
        </Grid>
      </Box>
      <Divider />

      <Box p={2}>{children}</Box>
    </Paper>
  );
};
