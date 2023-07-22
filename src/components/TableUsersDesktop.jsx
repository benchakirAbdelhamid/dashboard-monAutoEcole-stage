import React, { useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import {
  Typography,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { BiLogoDiscourse } from "react-icons/bi";
import {
  AiFillAmazonCircle,
  AiOutlineMenu,
  AiOutlineEdit,
} from "react-icons/ai";
import DropDown from "./DropDown";

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

const TableUsersDesktop = (props) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <CardBody className=" display_non_md overflow-x-scroll px-0 content_table">
        <table className="  mt-1 w-full min-w-max table-auto text-left ">
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
            {props.infoCondidate.map(
              (
                {
                  id,
                  img,
                  nom,
                  prenom,
                  email,
                  cin,
                  telephone,
                  pret_pout_examen,
                },
                index
              ) => {
                return (
                  <tr key={id} className="border_bottom_gray">
                    <td className="p-4 flex  gap-3">
                      <input
                        type="checkbox"
                        className="  cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-700 checked:bg-red-700 hover:before:opacity-10"
                      />
                      <Typography variant="small" className="font-normal">
                        #{id}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <div className="flex items-center gap-3">
                        <Avatar src={img} loading="lazy" alt={nom} size="sm" />
                        <div className="flex flex-col">
                          <Typography variant="small" className="font-normal">
                            {nom} {prenom}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 ">
                      <Typography variant="small" className="font-normal">
                        {cin}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <Typography variant="small" className="font-normal">
                        {telephone}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <Typography variant="small" className="font-normal">
                        {email}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <Typography variant="small" className="font-normal">
                        {pret_pout_examen}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <Tooltip content="Edit User">
                        <IconButton variant="text" color="blue-gray">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      Modifier
                    </td>
                    <td className="p-4 ">
                      <DropDown
                        row={[
                          { id: 1, name: "Exemans", icon: <AiOutlineMenu /> },
                          {
                            id: 2,
                            name: "Paiements",
                            icon: <AiFillAmazonCircle />,
                          },
                          {
                            id: 3,
                            name: "Formations",
                            icon: <BiLogoDiscourse />,
                          },
                        ]}
                      />
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

export default TableUsersDesktop;
