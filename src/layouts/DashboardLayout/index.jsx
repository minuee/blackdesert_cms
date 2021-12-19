import React, { useState, useEffect } from "react";

// @material-ui/core
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Paper,
  Grid,
  Button,
} from "@material-ui/core";

// @material-ui/core/styles
import { makeStyles, useTheme, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// @material-ui/icons
import MenuIcon from "@material-ui/icons/Menu";
import AirlineSeatReclineNormalIcon from "@material-ui/icons/AirlineSeatReclineNormal";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import ContactSupportOutlinedIcon from "@material-ui/icons/ContactSupportOutlined";

import SpeakerPhoneIcon from "@material-ui/icons/SpeakerPhone";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import TableChartIcon from "@material-ui/icons/TableChart";
import WebSharpIcon from "@material-ui/icons/WebSharp";
import ViewDayOutlinedIcon from "@material-ui/icons/ViewDayOutlined";
import BusinessIcon from "@material-ui/icons/Business";
import LanguageIcon from "@material-ui/icons/Language";
import WebIcon from "@material-ui/icons/Web";
import DevicesIcon from "@material-ui/icons/Devices";
import RouterIcon from "@material-ui/icons/Router";
import DnsIcon from "@material-ui/icons/Dns";

// react-router-dom
import { NavLink } from "react-router-dom";

// components
import { RatioContainer } from "components/ratio-container";
import LoadingProgress from "components/loading-progress";

import { Header } from "./header";

// images
import Logo from "images/layouts/logo_admin.jpg";

// redux
import { useSelector } from "react-redux";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  // appBar: {
  //   [theme.breakpoints.up("sm")]: {
  //     width: `calc(100% - ${drawerWidth}px)`,
  //     marginLeft: drawerWidth,
  //   },
  // },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  //   [theme.breakpoints.up("sm")]: {
  //     display: "none",
  //   },
  // },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.secondary.main,
    color: "#ffffff",
    "& svg": {
      color: "#ffffff",
    },
    "& hr": {
      // backgroundColor: theme.palette,
      backgroundColor: theme.palette.grey[600],
    },
  },
  paperAnchorDockedLeft: (props) => ({
    borderColor: theme.palette.grey[300],
    // borderColor: props.isDarkMode
    //   ? theme.palette.grey[800]
    //   : theme.palette.grey[300],
  }),
  content: {
    flexGrow: 1,
    // padding: theme.spacing(2),
    // [theme.breakpoints.up("md")]: {
    //   padding: theme.spacing(3),
    // },
    // addedStyle
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    overflowX: "auto",
    overflowY: "hidden",
  },
  // addedStyle
  muiListItemRoot: {
    width: "unset",
  },
  muiListItemButton: {
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
  },
  muiListItemGutters: {
    borderRadius: "12px",
    marginLeft: "8px",
    marginRight: "8px",
    marginTop: "8px",
  },
  routerIcon: {
    marginLeft: -4,
  },
}));

const ResponsiveDrawer = (props) => {
  const { window, children } = props;
  const myUser = useSelector((state) => state.reducer.myUser);
  const [state, setState] = useState({
    drawerOpen: false,
    isDarkMode: false,
  });
  const [pages, setPages] = useState([]);
  const classes = useStyles({ isDarkMode: state.isDarkMode });
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setState({ ...state, drawerOpen: !state.drawerOpen });
  };

  // const drawer = (
  //   <div>
  //     <div className={classes.toolbar}>
  //       {/* <RatioContainer w={drawerWidth} h={64}>
  //         <img
  //           src={Logo}
  //           style={{ width: "100%", height: "100%", objectFit: "contain" }}
  //         />
  //       </RatioContainer> */}
  //       <Typography variant="h4" align="center">
  //         Black Desert
  //       </Typography>
  //     </div>
  //     {/* <Toolbar /> */}
  //     <Divider />

  //     <List>
  //       {pages.map((x, index) => (
  //         <ListItem
  //           classes={{
  //             root: classes.muiListItemRoot,
  //             button: classes.muiListItemButton,
  //             gutters: classes.muiListItemGutters,
  //           }}
  //           button
  //           key={x.path}
  //           component={NavLink}
  //           to={`/${x.path}`}
  //           activeStyle={{
  //             backgroundColor: theme.palette.primary.main,
  //             boxShadow:
  //               "0 12px 20px -10px rgb(76 175 80 / 28%), 0 4px 20px 0 rgb(0 0 0 / 12%), 0 7px 8px -5px rgb(76 175 80 / 20%)",
  //           }}
  //         >
  //           <ListItemIcon>{x.icon}</ListItemIcon>
  //           <ListItemText primary={x.label} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </div>
  // );

  const container = window !== undefined ? () => window().document.body : undefined;

  const rootMenu = [
    {
      path: "data-chart",
      label: "데이터 집계",
      icon: <PeopleAltIcon />,
    },
    {
      path: "dashboard",
      label: "퀴즈 컨트롤",
      icon: <PeopleAltIcon />,
    },
  ];

  const subMenu = [
    {
      path: "data-chart",
      label: "데이터 집계",
      icon: <PeopleAltIcon />,
    },
  ];

  useEffect(() => {
    console.log({ myUser });
    myUser.isAdmin ? setPages(rootMenu) : setPages(subMenu);
  }, [myUser]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <LoadingProgress />
      <Header
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        isDarkMode={state.isDarkMode}
        setIsDarkMode={(isDarkMode) => {
          setState({ ...state, isDarkMode: isDarkMode });
        }}
      />

      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={state.drawerOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <div>
              <div className={classes.toolbar}>
                {/* <RatioContainer w={drawerWidth} h={64}>
          <img
            src={Logo}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </RatioContainer> */}
                <Typography variant="h4" align="center">
                  Black Desert
                </Typography>
              </div>
              {/* <Toolbar /> */}
              <Divider />

              <List>
                {pages.map((x, index) => (
                  <ListItem
                    classes={{
                      root: classes.muiListItemRoot,
                      button: classes.muiListItemButton,
                      gutters: classes.muiListItemGutters,
                    }}
                    button
                    key={x.path}
                    component={NavLink}
                    to={`/${x.path}`}
                    activeStyle={{
                      backgroundColor: theme.palette.primary.main,
                      boxShadow:
                        "0 12px 20px -10px rgb(76 175 80 / 28%), 0 4px 20px 0 rgb(0 0 0 / 12%), 0 7px 8px -5px rgb(76 175 80 / 20%)",
                    }}
                  >
                    <ListItemIcon>{x.icon}</ListItemIcon>
                    <ListItemText primary={x.label} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
              paperAnchorDockedLeft: classes.paperAnchorDockedLeft,
            }}
            variant="permanent"
            open
          >
            <div>
              <div className={classes.toolbar}>
                {/* <RatioContainer w={drawerWidth} h={64}>
          <img
            src={Logo}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </RatioContainer> */}
                <Typography variant="h4" align="center">
                  Black Desert
                </Typography>
              </div>
              {/* <Toolbar /> */}
              <Divider />

              <List>
                {pages.map((x, index) => (
                  <ListItem
                    classes={{
                      root: classes.muiListItemRoot,
                      button: classes.muiListItemButton,
                      gutters: classes.muiListItemGutters,
                    }}
                    button
                    key={x.path}
                    component={NavLink}
                    to={`/${x.path}`}
                    activeStyle={{
                      backgroundColor: theme.palette.primary.main,
                      boxShadow:
                        "0 12px 20px -10px rgb(76 175 80 / 28%), 0 4px 20px 0 rgb(0 0 0 / 12%), 0 7px 8px -5px rgb(76 175 80 / 20%)",
                    }}
                  >
                    <ListItemIcon>{x.icon}</ListItemIcon>
                    <ListItemText primary={x.label} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default ResponsiveDrawer;
