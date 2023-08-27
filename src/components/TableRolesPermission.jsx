import React, { useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  Typography,
  CardBody,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { AiFillDelete } from "react-icons/ai";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { BiAddToQueue } from "react-icons/bi";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

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

    //     // ================hamid============================
    // props.VALUE_ROWS_PERMISSION.forEach(x =>{
    //   // console.log(x)
    //   permissionsRole.forEach(z=>{
    //     // console.log(z)
    //   //   array.push(x )
    //     if( x.id == z.id ){
    //       x.checkExist = true
    //       // console.log('@@@@@@@@@@@@@@@@@@>',x)
    //     }
    //   })
    // })
    // console.log('============> ===> ',props.VALUE_ROWS_PERMISSION)
    // // ============================================
    //     // ================zakaria============================
    //  props.VALUE_ROWS_PERMISSION.forEach(x =>{
    //   let permissionsRoleCopy = [...permissionsRole]
    //   permissionsRoleCopy.forEach(z=>{
    //     if( x.id == z.id ){
    //       x.checkExist = true
    //     }
    //   })
    // })
    // console.log('============> ===> ',props.VALUE_ROWS_PERMISSION)
    //     // ================zakaria============================

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

    // console.log(props.VALUE_ROWS_PERMISSION)

    // console.log('============> ===> ', array)

    // permissionsRole.forEach(RolePermission => {
    //   props.VALUE_ROWS_PERMISSION.forEach( AllPermission=> {
    //     if( RolePermission.id != AllPermission.id  ){
    //       // setPermissionNotExistRole( AllPermission)
    //       console.log('-------------------> ',AllPermission)
    //     }
    //     // console.log(element)
    //  });
    //   // console.log(RolePermission)
    // });
  };

  // useEffect(()=>{
  //   console.log('-------------------> ',permissionNotExistRole)
  // },[permissionNotExistRole])

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const [permissionsRole, setPermissionsRole] = useState([]);

  const getIdRole = (id) => {
    // console.log('============> ===> ',props)
    // console.log('============> ===> ',id)
    props.TABLE_ROLES_PERMISSION.forEach((element) => {
      if (element.id == id) {
        setOpen(true);
        setPermissionsRole(element.permissions);
      }
    });
  };

  return (
    <>
      <CardBody className=" display_non_md  px-0 content_table">
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

                    <td className="p-4 ">
                      <Typography variant="small" className="font-normal">
                        {guard_name}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <Menu>
                        <MenuHandler>
                          <Button
                            style={{
                              background: "transparent",
                              boxShadow: "none",
                            }}
                          >
                            <span style={{ color: "gray" }}>
                              {" "}
                              afficher les permissions{" "}
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
                      <div
                        className="cursor-pointer"
                        onClick={() => handleClickOpenUpdate(permissions)}
                      >
                        <Tooltip content="Modifier Role">
                          <IconButton variant="text" color="blue-gray">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        Ajouter Permission
                      </div>
                      {/* dialog modal box update permission */}
                      <Dialog open={openUpdate} onClose={handleCloseUpdate}>
                        <DialogTitle>Update permission</DialogTitle>
                        <DialogContent>
                          <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                            <div className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                              <div className="mb-4 flex flex-col gap-6">

                                <div class="relative h-10 w-72 min-w-[200px]" style={{'width':'100%'}} >
                                  <select class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 empty:!bg-red-500 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50">
                                  <option selected disabled>
                                    select permission
                                  </option>
                                    {permissionNotExistRole.map((x) => {
                                    return (
                                      <option value={x.name} key={x.id}>{x.name} </option>
                                    );
                                  })}
                                  </select>
                                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Select a permission
                                  </label>
                                </div>
                              </div>

                              <button
                                onClick={handleCloseUpdate}
                                className="mt-6 block w-full select-none rounded-lg bg-red-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                              >
                                Ajouter
                              </button>
                              <button
                                onClick={handleCloseUpdate}
                                className="mt-2 block w-full select-none rounded-lg bg-red-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                              >
                                Cancel
                              </button>
                            </div>
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
                        Supprimer Permission
                        {/* {permissions.map((itemPermission) => {
                            return <span> {itemPermission.id} {id} </span>;
                          })} */}
                      </div>

                      {/* dialog modal box delete permission */}
                      <Dialog open={open} onClose={handleClose}>
                        <DialogContent>
                          <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                            <div className="mt-1 mb-1 w-80 max-w-screen-lg sm:w-96">
                              <div className="flex flex-col ">
                                {permissionsRole.map((x) => {
                                  return (
                                    <div
                                      key={x.id}
                                      class="inline-flex items-center"
                                    >
                                      <label
                                        class="relative flex cursor-pointer items-center rounded-full p-3"
                                        htmlFor="ripple-on"
                                        data-ripple-dark="true"
                                      >
                                        <input
                                          id="ripple-on"
                                          type="checkbox"
                                          class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                                        />
                                        <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-3.5 w-3.5"
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
                                        class="mt-px cursor-pointer select-none font-light text-gray-700"
                                        htmlFor="ripple-on"
                                      >
                                        <span>
                                          name :{x.name} | id : {x.id}{" "}
                                        </span>
                                      </label>
                                    </div>
                                  );
                                })}
                              </div>

                              <button
                                onClick={handleClose}
                                className="mt-4 block w-full select-none rounded-lg bg-red-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                              >
                                supprimer
                              </button>
                              <button
                                onClick={handleClose}
                                className="mt-2 block w-full select-none rounded-lg bg-red-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-light="true"
                              >
                                Cancel
                              </button>
                            </div>
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
