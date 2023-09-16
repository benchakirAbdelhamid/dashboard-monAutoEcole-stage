import React, { useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  Typography,
  CardBody,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { AiFillCaretDown, AiFillDelete, AiOutlineClose, AiOutlineDelete } from "react-icons/ai";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { BiAddToQueue, BiMessageAltAdd, BiMessageSquareAdd } from "react-icons/bi";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert } from "@material-tailwind/react";
import { DialogContentText } from "@mui/material";
import { AddToDrive } from "@mui/icons-material";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function IconUpdate() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
      />
    </svg>
  );
}

const TableRolesPermission = (props) => {
  // useEffect(() => {
  //   console.log("===> ", props);
  // });

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [openUpdateTest, setOpenUpdateTest] = React.useState(false);

  const [permissionNotExistRole, setPermissionNotExistRole] = useState([]);
  const handleClickOpenUpdate = (permissionsRole) => {
    setOpenUpdate(true);
    // console.log('============> ===> ',props.VALUE_ROWS_PERMISSION)
    // console.log('============> ===> ',permissionsRole)

    const array = [];


    const available_permissions = [];

    for (let x of props.VALUE_ROWS_PERMISSION) {
      let available = true;

      for (let y of permissionsRole) {
        if (x.id == y.id) available = false;
      }

      if (available) available_permissions.push(x);
    }

    // console.log(props.VALUE_ROWS_PERMISSION)
    // console.log(permissionsRole)
    console.log(available_permissions);
    setPermissionNotExistRole(available_permissions);
  };


  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const [permissionsRole, setPermissionsRole] = useState([]);

  const getIdRole = (id) => {
    props.TABLE_ROLES_PERMISSION.forEach((element) => {
      if (element.id == id) {
        setOpen(true);
        setPermissionsRole(element.permissions);
      }
    });
  };

  return (
    <>
      <CardBody className=" overflow-x-scroll  px-0 content_table">
        <table className="  w-full min-w-max table-auto text-left ">
          <thead className="border_bottom">
            <tr>
              {props.COLUMNS_ROLES_PERMISSION.map((head) => (
                <th key={head} className=" p-4">
                  <Typography
                    variant="small"
                    className="title_table font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.TABLE_ROLES_PERMISSION.map(
              ({ id, name, guard_name, permissions }, index) => {
                return (
                  <tr key={id} className="border_bottom_gray">
                    <td className="p-4 ">
                      <Typography variant="small" className="font-normal">
                        {id}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <Typography variant="small" className="font-normal">
                        {name}
                      </Typography>
                    </td>

                    <td className="">
                      <Menu>
                        <MenuHandler>
                          <Button
                            style={{
                              background: "transparent",
                              boxShadow: "none",
                            }}
                          >
                            <span style={{ color: "gray" , display : 'flex', alignItems:'center' , gap:'3px' }}>
                              
                              afficher les permissions <AiFillCaretDown/>
                            </span>
                          </Button>
                        </MenuHandler>
                        <MenuList>
                          {permissions.map((itemPermission) => {
                            return (
                              <MenuItem key={itemPermission.id}>
                                {" "}
                                {itemPermission.name}{" "}
                              </MenuItem>
                            );
                          })}
                        </MenuList>
                      </Menu>
                    </td>

                    <td className="p-4 ">
                      <span
                        className="cursor-pointer"
                        onClick={() => handleClickOpenUpdate(permissions)}
                      >
                        <Tooltip content="Modifier Role">
                          <IconButton variant="text" color="blue-gray">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        Ajouter
                      </span>
                      {/* dialog modal box update permission */}
                      <Dialog open={openUpdate} onClose={handleCloseUpdate}>
                        <DialogTitle>
                        <span className="x-full flex justify-end cursor-pointer">
                          <span onClick={handleCloseUpdate}>
                            <AiOutlineClose />
                          </span>
                        </span>
                        <div className="w-full text-center">
                          <span className="mb-3"> Update media? </span>
                          <DialogContentText>
                            <span className=" text-[#504f4f] ">
                              Are you sure you want to update "
                              "?
                              <br />
                              You can't undo this action
                            </span>
                          </DialogContentText>
                        </div>
                        </DialogTitle>

                        <DialogContent>
                        <Alert
                          icon={<IconUpdate />}
                          className="rounded  border-l-4 border-[#1632ec] bg-[#1632ec]/10  text-[#1632ec]"
                        >
                          <b> Warning</b>
                          <br />
                          <small className=" text-[#1632ec]">
                            You can't undo this action add
                          </small>
                        </Alert>
                          <div className="relative mt-4 flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                            <div className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                              <div className="mb-4 flex flex-col gap-6">

                                <div className="relative h-10 w-72 min-w-[200px]" style={{'width':'100%'}} >
                                  <select className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                    {permissionNotExistRole.map((x) => {
                                    return (
                                      <option value={x.name} key={x.id}>{x.name} </option>
                                    );
                                  })}
                                  </select>
                                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Select a permission
                                  </label>
                                </div>
                              </div>


                            </div>
                          </div>
                      
                           <div className=" select-none pt-1 pb-2 text-center w-full">
                          <button
                            style={{ borderRadius: "50px" }}
                            onClick={handleCloseUpdate}
                            className="middle none center mr-2  bg-[#3f41cae3] py-3 px-14 font-sans text-sm  text-white shadow-mdtransition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                          >
                            Cancel
                          </button>
                          <button
                            style={{ borderRadius: "50px" }}
                            onClick={handleCloseUpdate}
                            className=" middle none center ml-2 bg-[#c92e2ee2] py-3 px-14 font-sans text-sm   text-white shadow-md transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="false"
                          >
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "3px",
                              }}
                            >
                              Add <BiMessageAltAdd/>
                            </span>
                          </button>
                        </div>
                        </DialogContent>
                      </Dialog>
                    </td>

                    <td className="p-4 ">
                      {/* <div onClick={handleClickOpen}> */}
                      <div
                        className="cursor-pointer"
                        onClick={() => getIdRole(id)}
                      >
                        <Tooltip content="Supprimer Role">
                          <IconButton variant="text" color="blue-gray">
                            <AiFillDelete className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        Supprimer 
                        {/* {permissions.map((itemPermission) => {
                            return <span> {itemPermission.id} {id} </span>;
                          })} */}
                      </div>

                      {/* dialog modal box delete permission */}
                      <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>
                        <span className="x-full flex justify-end cursor-pointer">
                          <span onClick={handleClose}>
                            <AiOutlineClose />
                          </span>
                        </span>
                        <div className="w-full text-center">
                          <span className="mb-3"> Delete media? </span>
                          <DialogContentText>
                            <span className=" text-[#504f4f] ">
                              Are you sure you want to delete "
                              "?
                              <br />
                              You can't undo this action
                            </span>
                          </DialogContentText>
                        </div>
                      </DialogTitle>
                        <DialogContent>
                            <Alert
                          icon={<Icon />}
                          className="rounded  border-l-4 border-[#ec1616] bg-[#c92e2e]/10  text-[#b12727]"
                        >
                          <b> Warning</b>
                          <br />
                          <small className=" text-[#c04b4b]">
                            By deleting this media 
                            also be deleted.
                          </small>
                        </Alert>
                          <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                            <div className="mt-1 mb-1 w-80 max-w-screen-lg sm:w-96">
                              <div className="flex flex-col ">
                                {permissionsRole.map((x) => {
                                  return (
                                    <div
                                      key={x.id}
                                      className="inline-flex items-center"
                                    >
                                      <label
                                        className="relative flex cursor-pointer items-center rounded-full p-1.5"
                                        htmlFor="ripple-on"
                                        data-ripple-dark="true"
                                      >
                                        <input
                                          id={x.name}
                                          type="checkbox"
                                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        />
                                        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3.5 w-3.5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth="1"
                                          >
                                            <path
                                              fillRule="evenodd"
                                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                              clipRule="evenodd"
                                            ></path>
                                          </svg>
                                        </div>
                                      </label>
                                      <label
                                        className="mt-px cursor-pointer select-none font-light text-gray-700"
                                        htmlFor="ripple-on"
                                        name={x.name}
                                      >
                                        <span>
                                          name :{x.name} | id : {x.id}{" "}
                                        </span>
                                      </label>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                              <div className="mt-3 select-none py-3 px-6 text-center w-full">
                          <button
                            style={{ borderRadius: "50px" }}
                            onClick={handleClose}
                            className="middle none center mr-2  bg-[#3f41cae3] py-3 px-14 font-sans text-sm  text-white shadow-mdtransition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                          >
                            Cancel
                          </button>
                          <button
                            style={{ borderRadius: "50px" }}
                            onClick={handleClose}
                            className=" middle none center ml-2 bg-[#c92e2ee2] py-3 px-14 font-sans text-sm   text-white shadow-md transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="false"
                          >
                            <span
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "2px",
                              }}
                            >
                              Delete <AiOutlineDelete />{" "}
                            </span>
                          </button>
                        </div>
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </>
  );
};

export default TableRolesPermission;
