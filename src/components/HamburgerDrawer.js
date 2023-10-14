import React from "react";
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import categories from "../data/category";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import ListItemText from "@mui/material/ListItemText";

const useStyles = styled({
  list: {
    width: 200,
    paddingLeft: 10,
    paddingRight: 5,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer({ setCategory }) {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "shift")
    )
      return;

    setState({
      ...state,
      [anchor]: open,
    });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>Categoris</ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem
            style={{
              height: 40,
              borderRadius: 3,
            }}
            button
            onClick={() => setCategory(text)}
            key={text}
          >
            <ListItemText primary={text}></ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
}
