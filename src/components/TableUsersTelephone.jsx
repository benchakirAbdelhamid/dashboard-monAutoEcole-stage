import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Avatar } from "@material-tailwind/react";
import {
  AiFillAmazonCircle,
  AiOutlineEdit,
  AiOutlineMenu,
} from "react-icons/ai";
import { BiLogoDiscourse } from "react-icons/bi";
import DropDown from "../components/DropDown";

function createData(
  id,
  nom,
  prenom,
  img,
  cin,
  telephone,
  email,
  pret_pout_examen
) {
  return {
    id,
    nom,
    prenom,
    img,
    cin,
    telephone,
    email,
    pret_pout_examen,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <KeyboardArrowUpIcon className="tbody_table_md" />
            ) : (
              <KeyboardArrowDownIcon className="tbody_table_md" />
            )}
          </IconButton>
        </TableCell>
        <TableCell className="tbody_table_md" component="th" scope="row">
          <input
            type="checkbox"
            className="mr-2 h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-700 checked:bg-red-700 hover:before:opacity-10"
            id="checkbox"
          />
          #{row.id}
        </TableCell>
        <TableCell className="tbody_table_md">
          {" "}
          <Avatar src={row.img} loading="lazy" alt={row.nom} size="sm" />{" "}
          {row.nom} {row.prenom}
        </TableCell>

        <TableCell className="tbody_table_md">
          {/* ==================drop down ... ================== */}

          <div>
            <DropDown
              row={[
                { id: 1, name: "Modifier", icon: <AiOutlineEdit /> },
                { id: 2, name: "Exemans", icon: <AiOutlineMenu /> },
                { id: 3, name: "Paiements", icon: <AiFillAmazonCircle /> },
                { id: 4, name: "Formations", icon: <BiLogoDiscourse /> },
              ]}
            />
          </div>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="b" gutterBottom component="div">
                Afficher plus d'information
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className="title_table_md">CIN</TableCell>
                    <TableCell className="title_table_md">Telephone</TableCell>
                    <TableCell className="title_table_md">Email</TableCell>
                    <TableCell className="title_table_md">
                      Pret pour examen
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      className="tbody_table_md"
                      component="th"
                      scope="row"
                    >
                      {row.cin}
                    </TableCell>
                    <TableCell className="tbody_table_md">
                      {" "}
                      {row.telephone}{" "}
                    </TableCell>
                    <TableCell className="tbody_table_md">
                      {" "}
                      {row.email}{" "}
                    </TableCell>
                    <TableCell className="tbody_table_md">
                      {" "}
                      {row.pret_pout_examen}{" "}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const TableUsersTelephone = (props) => {
  return (
    <div>
      <TableContainer className="containerTable">
        <Table className="table_md" aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell className="title_table_md">
                {" "}
                <input
                  type="checkbox"
                  className=" h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-red-700 checked:bg-red-700 hover:before:opacity-10"
                  id="checkbox"
                />
              </TableCell>
              <TableCell className="title_table_md">Nom complet</TableCell>
              <TableCell className="title_table_md"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.infoCondidate.map((row) => (
              <Row key={row.id} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableUsersTelephone;
