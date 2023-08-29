import { Button, IconButton } from "@material-tailwind/react";
import React from "react";
import { BiAddToQueue, BiMessageAltAdd } from "react-icons/bi";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert } from "@material-tailwind/react";
import { DialogContentText } from "@mui/material";
import { AddToDrive } from "@mui/icons-material";
import { AiOutlineClose } from "react-icons/ai";

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

const DialogAddPermission = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
          style={{width:'235px',padding:'0px', display:'flex', justifyContent:'center' , alignItems:'center'}}
          variant="outlined"
          color="gray"
        onClick={handleClickOpen}
      >
        <IconButton variant="text" color="gray">
          <BiAddToQueue className="h-4 w-4" />
        </IconButton>{" "}
        <p style={{fontSize:'11px'}}>
        Créer permission
        </p>
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="x-full flex justify-end cursor-pointer">
            <span onClick={handleClose}>
              <AiOutlineClose />
            </span>
          </div>
          <div className="w-full text-center">
            <div className="mb-3"> Creer une nouvelle permission </div>
            <DialogContentText>
              <div className=" text-[#504f4f] ">
                Are you sure you want to create " "?
                <br />
                You can't undo this action
              </div>
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

          <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <form className=" w-80 max-w-screen-lg sm:w-96">
              <div className=" mt-4 mb-4 flex flex-col gap-6">
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
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
      </Dialog>
    </>
  );
};

export default DialogAddPermission;
