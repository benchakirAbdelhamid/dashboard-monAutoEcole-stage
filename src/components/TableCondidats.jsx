import React from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";
import {
  Typography,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  ListItemSuffix,
  Chip,
  Card
} from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { BiLogoDiscourse } from "react-icons/bi";
import { AiFillAmazonCircle, AiOutlineMenu , AiOutlineEdit } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import Pagination from "./Pagination";
import DropDown from "./DropDown";
import Formation from "../pages/Formations";


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

const input_checkbox = (
  <input
    type="checkbox"
    className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-700 checked:bg-red-700 hover:before:opacity-10"
    id="checkbox"
  />
);
const TABLE_HEAD = [
  input_checkbox,
  "Nom complet",
  "CIN",
  "Telephone",
  "Email",
  "Pret pour examen",
  "Action",
  "",
];

const TABLE_ROWS = [
  {
    id: "CD9801",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    nom: " Michael",
    prenom: "John ",
    cin: " Michael",
    telephone: "Manager",
    email: "john@creative-tim.com",
    pret_pout_examen: "23/04/18",
  },
  {
    id: "CD9441",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    nom: " Michael",
    prenom: "John ",
    cin: " Michael",
    telephone: "Manager",
    email: "john@creative-tim.com",
    pret_pout_examen: "23/04/18",
  },
  {
    id: "CD1281",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    nom: " Michael",
    prenom: "John ",
    cin: " Michael",
    telephone: "Manager",
    email: "john@creative-tim.com",
    pret_pout_examen: "23/04/18",
  },
  {
    id: "CD8984",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    nom: " Michael",
    prenom: "John ",
    cin: " Michael",
    telephone: "Manager",
    email: "john@creative-tim.com",
    pret_pout_examen: "23/04/18",
  },
  {
    id: "CD5581",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    nom: " Michael",
    prenom: "John ",
    cin: " Michael",
    telephone: "Manager",
    email: "john@creative-tim.com",
    pret_pout_examen: "23/04/18",
  },
  {
    id: "CD9445",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    nom: " Michael",
    prenom: "John ",
    cin: " Michael",
    telephone: "Manager",
    email: "john@creative-tim.com",
    pret_pout_examen: "23/04/18",
  },
  {
    id: "CD1881",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    nom: " Michael",
    prenom: "John ",
    cin: " Michael",
    telephone: "Manager",
    email: "john@creative-tim.com",
    pret_pout_examen: "23/04/18",
  },
  {
    id: "CD8084",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    nom: " Michael",
    prenom: "John ",
    cin: " Michael",
    telephone: "Manager",
    email: "john@creative-tim.com",
    pret_pout_examen: "23/04/18",
  },
  {
    id: "CD9681",
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    nom: " Michael",
    prenom: "John ",
    cin: " Michael",
    telephone: "Manager",
    email: "john@creative-tim.com",
    pret_pout_examen: "23/04/18",
  },
];

const TableCondidats = () => {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="h-full w-full  ">
      {/* responsive desktop */}
      <CardBody className=" display_non_md overflow-x-scroll px-0 content_table">
        <table className="  mt-1 w-full min-w-max table-auto text-left ">
          <thead className="border_bottom">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className=" p-4"
                >
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
            {TABLE_ROWS.map(
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
                      <Typography
                        variant="small"
                        
                        className="font-normal"
                      >
                        #{id}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <div className="flex items-center gap-3">
                        <Avatar src={img} loading="lazy" alt={nom} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            
                            className="font-normal"
                          >
                            {nom} {prenom}
                          </Typography>
                        </div>
                      </div>
                    </td>

                    <td className="p-4 ">
                      <Typography
                        variant="small"
                        
                        className="font-normal"
                      >
                        {cin}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <Typography
                        variant="small"
                       
                        className="font-normal"
                      >
                        {telephone}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <Typography
                        variant="small"
                     
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>

                    <td className="p-4 ">
                      <Typography
                        variant="small"
                     
                        className="font-normal"
                      >
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
                      {/* <Popover placement="bottom">
                        <PopoverHandler className="button_dots">
                          <Button className="button_dots">
                            <BsThreeDots />
                          </Button>
                        </PopoverHandler>
                        <PopoverContent className="w-52">
                          <List className="p-0">
                            <a href="#" className="text-initial">
                              <ListItem>
                                <ListItemPrefix>
                                  <AiOutlineMenu />
                                </ListItemPrefix>
                                Exemans
                              </ListItem>
                            </a>
                            <a href="#" className="text-initial">
                              <ListItem>
                                <ListItemPrefix>
                                  <AiFillAmazonCircle />
                                </ListItemPrefix>
                                Paiements
                              </ListItem>
                            </a>
                            <a href="#" className="text-initial">
                              <ListItem>
                                <ListItemPrefix>
                                  <BiLogoDiscourse />
                                </ListItemPrefix>
                                Formations
                              </ListItem>
                            </a>
                          </List>
                        </PopoverContent>
                      </Popover> */}
                            <DropDown
        row={[
          { id: 1, name: "Exemans" ,icon : <AiOutlineMenu /> },
          { id: 2, name: "Paiements" ,icon : <AiFillAmazonCircle /> },
          { id: 3, name: "Formations" ,icon : <BiLogoDiscourse /> },
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


      <div className="display_non_lg" >
        <Formation/>
      </div>











      <Pagination />
    </div>
  );
};

export default TableCondidats;
