import {
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  ListItem,
  AppBar,
  Avatar,
  Toolbar,
} from "@material-ui/core";
import { format } from "date-fns";
import HomeIcon from "@material-ui/icons/Home";
import CreateIcon from "@material-ui/icons/Create";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import { Link } from "react-router-dom";
import React from "react";
const drawerWidth = "18vw";
const useStyle = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
    },
    navigation: {
      marginTop: theme.spacing(3),
      padding: theme.spacing(2.5),
      paddingBottom: 0,
    },
    children: {
      marginLeft: drawerWidth,
      width: "100vw",
      padding: "30px",
      marginTop: "50px",
    },
    drawerPaper: {
      width: drawerWidth,
    },
    icon: {
      fontSize: theme.spacing(4),
    },
    listItem: {
      borderRadius: "24px",
      marginBottom: 5,
    },
    logout: {
      borderRadius: "24px",
      position: "absolute",
      bottom: "20px",
      width: "210px",
    },
    list: {
      padding: theme.spacing(2.5),
      height: "100vh",
    },
    appBar: {
      paddingLeft: drawerWidth,
    },
    date: {
      flexGrow: 1,
    },
    name: {
      paddingRight: "30px",
    },
  };
});

export const Layout = ({ children }) => {
  const classes = useStyle();
  const menuItems = [
    {
      title: "Home",
      icon: <HomeIcon color="secondary" className={classes.icon} />,
      path: "/",
    },
    {
      title: "Create",
      icon: <CreateIcon color="secondary" className={classes.icon} />,
      path: "/create",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar
        color="inherit"
        position="fixed"
        className={classes.appBar}
        elevation={1}
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), "do MMMM YYYY")}
          </Typography>
          <Typography color="secondary" className={classes.name}>
            Ed
          </Typography>
          <Avatar className={classes.avatar} src="/ed.jpeg" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div className={classes.navigation}>
          <Typography variant="h5">Daily Notes</Typography>
        </div>
        <List className={classes.list}>
          {menuItems.map(({ icon, title, path }) => (
            <Link to={path}>
              <ListItem button className={classes.listItem}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{title}</ListItemText>
              </ListItem>
            </Link>
          ))}

          <ListItem button className={classes.logout}>
            <ListItemIcon>
              {
                <KeyboardReturnIcon
                  color="secondary"
                  className={classes.icon}
                />
              }
            </ListItemIcon>
            <ListItemText> Log out</ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <div className={classes.children}>{children}</div>
    </div>
  );
};
