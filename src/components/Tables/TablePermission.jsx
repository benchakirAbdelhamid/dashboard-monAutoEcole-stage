import React, { useEffect, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Typography,
  CardBody,
  IconButton,
  Tooltip,
  DialogHeader,
} from "@material-tailwind/react";
import { AiFillDelete } from "react-icons/ai";
import { Alert } from "@material-tailwind/react";
import { DialogBody, DialogFooter } from "@material-tailwind/react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

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

const TablePermission = (props) => {
  const [OpenDialogUpdate, setOpenDialogUpdate] = React.useState(false);
  const [PermissionsRole, setPermissionsRole] = useState([]);
  const [OpenDialogDelete, setOpenDialogDelete] = React.useState(false);

  // open dialog delete 
  const handleOpenDialogDelete = () => {
    setOpenDialogDelete(true);
  };
  // close dialog delete 
  const handleCloseDialogDelete = () => {
    setOpenDialogDelete(false);
  };
  // get permission and stock permission in state and open dialog update
  const getPermission = (id) => {
    setOpenDialogUpdate(true);
    props.infoCondidate.forEach((element) => {
      if (element.id == id) {
        setPermissionsRole(element);
      }
    });
  };
  // change state permission
  const handleInputChange = (e, id, field) => {
    const updatedTableData = { ...PermissionsRole, [field]: e.target.value };
    setPermissionsRole(updatedTableData);
  };
  // close dialog update
  const handleCloseDialogUpdate = () => {
    setOpenDialogUpdate(false);
  };

  return (
    <>
      <CardBody className=" overflow-x-scroll  px-0 content_table">
        <table className="  w-full min-w-max table-auto text-left ">
          <thead className="border_bottom">
            <tr>
              {props.infoColumnsCandidate.map((head) => (
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
            {props.infoCondidate.map(({ id, name }, index) => {
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

                  {/* update permission */}
                  <td className="p-4 cursor-pointer ">
                    <div onClick={() => getPermission(id)}>
                      <Tooltip content="Modifier Role">
                        <IconButton variant="text" color="blue-gray">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      update
                    </div>
                    {/* dialog update permission */}
                    <Dialog
                      fullWidth={"md"}
                      maxWidth={"md"}
                      open={OpenDialogUpdate}
                      onClose={handleCloseDialogUpdate}
                    >
                      <div className="dialog_checkbox flex items-center justify-between">
                        <DialogHeader>Update Permission</DialogHeader>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-3 h-5 w-5"
                          onClick={handleCloseDialogUpdate}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <DialogBody>
                        <div className="dialogBody_checkbox">
                          <div className="mb-4 flex flex-col gap-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                              <input
                                disabled
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                value={PermissionsRole.id}
                              />{" "}
                              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Name
                              </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                              <input
                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                value={PermissionsRole.name}
                                onChange={(e) =>
                                  handleInputChange(
                                    e,
                                    PermissionsRole.id,
                                    "name"
                                  )
                                }
                              />{" "}
                              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Name
                              </label>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </DialogBody>

                      <DialogFooter className="space-x-2">
                        <button
                          class="middle none center rounded-lg py-2 px-4 font-sans text-xs font-bold uppercase text-gray-700 transition-all hover:bg-gray-500/10 active:bg-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          onClick={handleCloseDialogUpdate}
                        >
                          close
                        </button>
                        <button
                          class="middle none center rounded-lg py-2 px-4 font-sans text-xs font-bold uppercase text-gray-700 transition-all hover:bg-gray-500/10 active:bg-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          onClick={handleCloseDialogUpdate}
                        >
                          update
                        </button>
                      </DialogFooter>
                    </Dialog>
                  </td>
                  {/* delete permission */}
                  <td className="p-4 cursor-pointer ">
                    <div onClick={handleOpenDialogDelete}>
                      <Tooltip content="Supprimer Role">
                        <IconButton variant="text" color="blue-gray">
                          <AiFillDelete className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      delete
                    </div>
                    <Dialog
                      fullWidth={"sm"}
                      maxWidth={"sm"}
                      open={OpenDialogDelete}
                      onClose={handleCloseDialogDelete}
                    >
                      <div className="dialog_checkbox flex items-center justify-between">
                        <DialogHeader>Delete Permission</DialogHeader>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-3 h-5 w-5"
                          onClick={handleCloseDialogDelete}
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <DialogBody>
                        <Alert
                          icon={<Icon />}
                          className="rounded  border-l-4 border-[#ec1616] bg-[#c92e2e]/10  text-[#b12727]"
                        >
                          <b> Warning</b>
                          <br />
                          <small className=" text-[#c04b4b]">
                            Are you sure you want to delete this item?
                          </small>
                        </Alert>
                      </DialogBody>

                      <DialogFooter className="space-x-2">
                      <button
                          class="middle none center rounded-lg py-2 px-4 font-sans text-xs font-bold uppercase text-gray-700 transition-all hover:bg-gray-500/10 active:bg-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          onClick={handleCloseDialogDelete}
                        >
                          close
                        </button>
                        <button
                          class="middle none center rounded-lg py-2 px-4 font-sans text-xs font-bold uppercase text-gray-700 transition-all hover:bg-gray-500/10 active:bg-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                          onClick={handleCloseDialogDelete}
                        >
                          delete
                        </button>
                      </DialogFooter>
                    </Dialog>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </>
  );
};

export default TablePermission;
