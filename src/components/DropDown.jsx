import * as React from "react";
import { IconBase } from "react-icons";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  AiFillAmazonCircle,
  AiOutlineEdit,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiLogoDiscourse } from "react-icons/bi";
import { useEffect } from "react";

const DropDown = (props) => {
  const { row } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

//   useEffect(() => {
//     row.forEach((element) => {
//       console.log(element);
//     });
//   });

  return (
    <div>
      <div style={{ marginLeft: "20px" }}>
        <Button
          id="basic-button"
          aria-controls={open1 ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open1 ? "true" : undefined}
          onClick={handleClick}
          style={{'color':'gray'}}
        >
          ...
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open1}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {row?.map((element) => {
            return (
              <MenuItem key={element.id} onClick={handleClose}>
                <span style={{ marginRight: "10px" }}> {element.icon} </span>
                {element.name}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    </div>
  );
};

export default DropDown;
