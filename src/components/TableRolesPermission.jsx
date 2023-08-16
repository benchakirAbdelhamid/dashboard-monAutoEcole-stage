import React, { useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  Typography,
  CardBody,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import {
  AiFillDelete,
} from "react-icons/ai";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const TableRolesPermission = (props) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
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

                  <td className="p-4 ">
                    <Tooltip content="Modifier Role">
                      <IconButton variant="text" color="blue-gray">
                        <PencilIcon className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    Modifier
                  </td>
                  <td className="p-4 ">
                    <Tooltip content="Supprimer Role">
                      <IconButton variant="text" color="blue-gray">
                        <AiFillDelete className="h-4 w-4" />
                      </IconButton>
                    </Tooltip>
                    
                    supprimer
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
