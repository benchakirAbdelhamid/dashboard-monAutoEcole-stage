import React from "react";
import { MdOutlineNotifications } from "react-icons/md";

import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
  } from "@material-tailwind/react";
import { AiFillApple } from "react-icons/ai";

const DrawerNotification = () => {
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  return (
    <>
      <a onClick={openDrawerRight} className="opacity-60 " href="#">
        <MdOutlineNotifications style={{ fontSize: "20px" }} />
      </a>

      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
        
      >
        <div className="mb-6 flex items-center justify-between" >
          <Typography variant="h5" color="blue-gray">
            Notifications
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>

          
        </div>

    <div >
    

      <span className="list_notification">
        <div className="icon_list_notification">
            <AiFillApple className="icon_notification"/> 
        </div>
        <div className="list_notification_chidren">
            <h4>Un condidat a ete passe un ...</h4>
            <small>4m ago</small>
        </div>
      </span>
      <span className="list_notification">
        <div className="icon_list_notification">
            <AiFillApple className="icon_notification"/> 
        </div>
        <div className="list_notification_chidren">
            <h4>Nouveau inscription</h4>
            <small>1:23 AM</small>
        </div>
      </span>
      <span className="list_notification">
        <div className="icon_list_notification">
            <AiFillApple className="icon_notification"/> 
        </div>
        <div className="list_notification_chidren">
            <h4>Un condidat a ete passe un ...</h4>
            <small>4m ago</small>
        </div>
      </span>
      <span className="list_notification">
        <div className="icon_list_notification">
            <AiFillApple className="icon_notification"/> 
        </div>
        <div className="list_notification_chidren">
            <h4> Une message de Hamid</h4>
            <small>Yesterday 12:39 AM</small>
        </div>
      </span>

    </div>
      </Drawer>
    </>
  );
};

export default DrawerNotification;
