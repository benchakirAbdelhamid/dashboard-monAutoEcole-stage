import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AddToDrive } from "@mui/icons-material";
import { AiOutlineClose } from "react-icons/ai";
import {
  Typography,
  CardBody,
  IconButton,
  Tooltip,
  DialogHeader,
} from "@material-tailwind/react";
import {
  // Button,
  // Dialog,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";




const DialogAddRole = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>



<Button variant="outlined" onClick={handleClickOpen}>
        Add role
      </Button>


      
      <Dialog
        fullWidth={'md'}
        maxWidth={'md'}
        open={open}
        onClose={handleClose}
        // style={{'width':'500px', 'margin':'auto'}}
      >

<div className="dialog_checkbox flex items-center justify-between">
                        <DialogHeader>Add role</DialogHeader>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mr-3 h-5 w-5"
                          onClick={handleClose}
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
                              <input className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                              <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Name
                              </label>
                            </div>
                          </div>
                          <div >
                          <h3 > permission</h3> 
                          <section className="parent_checkbox">
                            {props.infoRowsPermission?.map((itemPermission) => {
                              return (
                                <article key={itemPermission.id}>
                                  <label class="switch">
                                    <input type="checkbox" />
                                    <span class="slider round"></span>
                                  </label>
                                  <span>{itemPermission.name} </span>
                                </article>
                              );
                            })}
                          </section>
                          </div>
                        </div>
                      </DialogBody>

                      <DialogFooter className="space-x-2">
                        <Button  onClick={handleClose}>
                        Cancel
                        </Button>
                        <Button
                          onClick={handleClose}
                        >
                          {" "}
                          submit
                        </Button>
                      </DialogFooter>

      </Dialog>


      {/* <Button
        style={{
          width: "220px",
          padding: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        variant="outlined"
        color="gray"
        onClick={handleClickOpen}
      >
        <IconButton variant="text" color="gray">
          <BiAddToQueue className="h-4 w-4" />
        </IconButton>{" "}
        <span style={{ fontSize: "11px" }}>Créer une nouvelle role </span>
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <span className="x-full flex justify-end cursor-pointer">
            <span onClick={handleClose}>
              <AiOutlineClose />
            </span>
          </span>
          <div className="w-full text-center">
            <div className="mb-3"> Creer une nouvelle role </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <form className=" w-80 max-w-screen-lg sm:w-96">
              <div className=" mt-4 mb-4 flex flex-col gap-6">
                <span className="relative h-11 w-full min-w-[200px]">
                  <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                  />
                  <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-red-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Role name
                  </label>
                </span>
              </div>
            </form>
          </div>
          <div>
            <p>Permissions</p>
            <div className="flex flex-col gap-6">
              {props.infoRowsPermission?.map((item) => {
                return (
                  <div key={item.id} className="inline-flex items-center">
                    <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
                      <input
                        id={item.name}
                        type="checkbox"
                        className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-blue-gray-100 transition-colors duration-300 checked:bg-red-500 peer-checked:border-red-500 peer-checked:before:bg-red-500"
                      />
                      <label
                        for={item.name}
                        className="before:content[''] absolute top-2/4 -left-1 h-5 w-5 -translate-y-2/4 cursor-pointer rounded-full border border-blue-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-red-500 peer-checked:before:bg-red-500"
                      >
                        <div
                          className="top-2/4 left-2/4 inline-block -translate-x-2/4 -translate-y-2/4 rounded-full p-5"
                          data-ripple-dark="true"
                        ></div>
                      </label>
                    </div>
                    <label
                      for={item.name}
                      className="mt-px ml-3 mb-0 cursor-pointer select-none font-light text-gray-700"
                    >
                      {item.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" select-none pt-1 pb-2 text-center w-full">
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
                  gap: "3px",
                }}
              >
                Create <BiMessageAltAdd />
              </span>
            </button>
          </div>
        </DialogContent>
      </Dialog> */}
    </>
  );
};

export default DialogAddRole;
