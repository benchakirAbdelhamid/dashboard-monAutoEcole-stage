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



const DialogAddPermission = (props) => {
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
        Add permission
      </Button>


      
      <Dialog
        fullWidth={'md'}
        maxWidth={'md'}
        open={open}
        onClose={handleClose}
        // style={{'width':'500px', 'margin':'auto'}}
      >

<div className="dialog_checkbox flex items-center justify-between">
                        <DialogHeader>Add permission</DialogHeader>
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
                          <div>
                         
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

    </>
  );
};

export default DialogAddPermission;
