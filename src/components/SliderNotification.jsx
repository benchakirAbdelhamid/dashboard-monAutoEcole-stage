import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { MdOutlineNotifications } from "react-icons/md";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export default function SliderNotification() {
  const [state, setState] = React.useState({
    right: false,
  });

  const listNotification = [
    {
      id: 1,
      title: "Un condidat a ete passe un ...",
      time: "4m ago",
      icon: <ImageIcon />,
    },
    {
      id: 2,
      title: "Nouveau inscription",
      time: "1:23 AM",
      icon: <WorkIcon />,
    },
    {
      id: 3,
      title: "Un condidat a ete passe un ...",
      time: "4m ago",
      icon: <BeachAccessIcon />,
    },
    {
      id: 4,
      title: "Une message de Hamid",
      time: "Yesterday 12:39 AM",
      icon: <WorkIcon />,
    },
  ];

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 310 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h2
        className="pt-4 pl-4 title_notification"
        style={{ fontWeight: "600", fontSize: "20px" }}
      >
        Notifications
      </h2>
      <List
        sx={{
          width: "100%",
          maxWidth: 330,
          bgcolor: "background.paper",
        }}
      >
        {listNotification.map((item) => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar>{item.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={item.title}
              secondary={item.time}
              className="xx"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <a onClick={toggleDrawer("right", true)} className="opacity-60 " href="#">
        <MdOutlineNotifications style={{ fontSize: "20px" }} />
      </a>
      <SwipeableDrawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </div>
  );
}
