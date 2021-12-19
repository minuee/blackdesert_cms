import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  bold: {
    fontWeight: 600,
  },
});

export const useCommonStyles = () => {
  const classes = useStyles();
  return { ...classes };
};

// export default cmcl;
