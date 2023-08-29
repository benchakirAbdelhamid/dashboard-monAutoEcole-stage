import React, { useEffect, useState } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Typography,
  CardBody,
  IconButton,
  Tooltip,
  DialogHeader,
} from "@material-tailwind/react";
import {
  AiFillDelete,
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineDelete,
  AiOutlineUpload,
} from "react-icons/ai";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert } from "@material-tailwind/react";
import { DialogContentText } from "@mui/material";
import { UpdateOutlined } from "@mui/icons-material";

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [openUpdate, setOpenUpdate] = React.useState(false);

  const [permissionsRole1, setPermissionsRole1] = useState([]);

  const handleClickOpenUpdate = (id) => {
    setOpenUpdate(true);
    props.infoCondidate.forEach((element) => {
      if (element.id == id) {
        setPermissionsRole1(element);
        // console.log(element)
      }
    });
  };

  useEffect(() => {
    console.log("===22===> ", permissionsRole1.name);
    console.log("===22===> ", permissionsRole1.id);
  }, [permissionsRole1]);

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  const handleInputChange = (e, id, field) => {
    const updatedTableData = { ...permissionsRole1, [field]: e.target.value };
    setPermissionsRole1(updatedTableData);
    // console.log(updatedTableData)
    // console.log(infoUseru)
  };

  return (
    <>
      {/* <CardBody className=" display_non_md overflow-x-scroll px-0 content_table"> */}
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

                  <td className="p-4 cursor-pointer ">
                    <div
                      className="cursor-pointer"
                      onClick={() => handleClickOpenUpdate(id)}
                    >
                      <Tooltip content="Modifier Role">
                        <IconButton variant="text" color="blue-gray">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      Modifier
                    </div>

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
                            You can't undo this action update
                          </small>
                        </Alert>
                        <div className="relative flex flex-col  bg-transparent bg-clip-border text-gray-700 shadow-none">
                          <form className="mt-8  w-full max-w-screen-lg sm:w-96">
                            <div className="mb-4 flex flex-col gap-6">
                              <div className="relative h-11 w-full min-w-[200px]">
                                <div className="relative h-10 w-full min-w-[200px]">
                                  <input
                                    disabled
                                    className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                  />
                                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    {permissionsRole1.id}
                                  </label>
                                </div>
                              </div>
                              <div className="relative h-11 w-full min-w-[200px]">
                                <input
                                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                  value={permissionsRole1.name}
                                  onChange={(e) =>
                                    handleInputChange(
                                      e,
                                      permissionsRole1.id,
                                      "name"
                                    )
                                  }
                                />
                                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                  Name
                                </label>
                              </div>
                            </div>
                          </form>
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
                                gap: "2px",
                              }}
                            >
                              Update <AiOutlineUpload />
                            </span>
                          </button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </td>

                  <td className="p-4 cursor-pointer ">
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
                              {permissionsRole1.name}"?
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
                            By deleting this media 8 connected hotspots will
                            also be deleted.
                          </small>
                        </Alert>

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
            })}
          </tbody>
        </table>
      </CardBody>
    </>
  );
};

export default TableRolesPermission;
