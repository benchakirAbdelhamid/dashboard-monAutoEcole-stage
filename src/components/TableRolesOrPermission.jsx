import React, { useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Typography,
  CardBody,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { AiFillDelete } from "react-icons/ai";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const TableRolesPermission = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openUpdate, setOpenUpdate] = React.useState(false);

  const handleClickOpenUpdate = () => {
    setOpenUpdate(true);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  

  return (
    <>
      {/* <CardBody className=" display_non_md overflow-x-scroll px-0 content_table"> */}
      <CardBody className=" display_non_md  px-0 content_table">
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
            {props.infoCondidate.map(({ id, name, guard_name }, index) => {
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

                  <td className="p-4 cursor-pointer ">
                    <div onClick={handleClickOpenUpdate}>
                      <Tooltip content="Modifier Role">
                        <IconButton variant="text" color="blue-gray">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      Modifier
                    </div>

                    <Dialog open={openUpdate} onClose={handleCloseUpdate}>
                      <DialogTitle>
                        Are you sure to update this item{" "}
                      </DialogTitle>
                      <DialogContent>
                        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                              <div className="relative h-11 w-full min-w-[200px]">
                                <div class="relative h-10 w-full min-w-[200px]">
                                  <input
                                    disabled="true"
                                    class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                  />
                                  <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    id : 5
                                  </label>
                                </div>
                              </div>
                              <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  placeHolder=" "
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                  Name
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
                          </form>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </td>

                  <td className="p-4 cursor-pointer " >
                    <div onClick={handleClickOpen}>
                      <Tooltip content="Supprimer Role">
                        <IconButton variant="text" color="blue-gray">
                          <AiFillDelete className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      supprimer
                    </div>

                    <Dialog open={open} onClose={handleClose}>
                      <DialogTitle>
                        Are you sure to remove this item{" "}
                      </DialogTitle>
                      <DialogContent>
                        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                          <button
                            onClick={handleClose}
                            className="mt-6 block w-full select-none rounded-lg bg-red-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                          >
                            Ajouter
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
                      </DialogContent>
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

export default TableRolesPermission;
