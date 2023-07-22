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
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

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

        {row.nom ? (
          <TableCell className="tbody_table_md" component="th" scope="row">
            {row.nom} {row.prenom}
          </TableCell>
        ) : (
          ""
        )}

        {row.serie ? (
          <TableCell className="tbody_table_md" component="th" scope="row">
            {row.serie}
          </TableCell>
        ) : (
          ""
        )}

        {row.cours ? (
          <TableCell className="tbody_table_md" component="th" scope="row">
            {row.cours}
          </TableCell>
        ) : (
          ""
        )}

        <TableCell className="tbody_table_md" component="th" scope="row">
          {row.category}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="b" gutterBottom component="div">
               <span className="title-md"> Afficher plus d'information</span> 
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {row.ville ? (
                      <TableCell className="title_table_md"> Ville </TableCell>
                    ) : (
                      ""
                    )}
                    {row.telephone ? (
                      <TableCell className="title_table_md">
                        {" "}
                        Telephone{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}

                    {row.correction ? (
                      <TableCell className="title_table_md">
                        {" "}
                        Correction{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}
                    {row.note_moyen ? (
                      <TableCell className="title_table_md">
                        {" "}
                        Note moyen{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}
                    {row.complete_incomplete ? (
                      <TableCell className="title_table_md">
                        {" "}
                        Complete incomplete{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    {row.ville ? (
                      <TableCell className="title_table_md">
                        {" "}
                        {row.ville}{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}

                    {row.telephone ? (
                      <TableCell className="title_table_md">
                        {" "}
                        {row.telephone}{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}

                    {row.correction ? (
                      <TableCell className="title_table_md">
                        <div className=" padg-table center relative inline-block select-none whitespace-nowrap   align-baseline font-sans text-xs font-bold uppercase leading-none">
                          ...
                        </div>
                        {row.correction}{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}
                    {row.note_moyen ? (
                      <TableCell className="title_table_md">
                        {" "}
                        {row.note_moyen}{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}
                    {row.complete_incomplete ? (
                      <TableCell className="title_table_md">
                        <div className="animated-progress progress-blue">
                          <span
                            style={{ width: `${row.complete_incomplete}%` }}
                          >
                            {" "}
                            {row.complete_incomplete}%
                          </span>
                        </div>
                      </TableCell>
                    ) : (
                      ""
                    )}
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

const TableAnalyzeTelephone = (props) => {
  return (
    <div className="table-telephone">
      {props.titleTableInscription ? (
        <h2> {props.titleTableInscription.title} </h2>
      ) : (
        ""
      )}

      {props.titleTable ? <h2> {props.titleTable.title} </h2> : ""}

      {props.titleTableCourse ? <h2> {props.titleTableCourse.title} </h2> : ""}

      {props.infoTable ? (
        <TableContainer className="containerTable">
          <Table className="table_md" aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell className="title_table_md">Nom complet</TableCell>
                <TableCell className="title_table_md">Categorie</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.infoTable.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}

      {props.infoSeriesTable ? (
        <TableContainer className="containerTable">
          <Table className="table_md" aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell className="title_table_md">Nom complet</TableCell>
                <TableCell className="title_table_md">Categorie</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.infoSeriesTable.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}

      {props.infoCoursTable ? (
        <TableContainer className="containerTable">
          <Table className="table_md" aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell className="title_table_md">- -</TableCell>
                <TableCell className="title_table_md">Categorie</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.infoCoursTable.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}
    </div>
  );
};

export default TableAnalyzeTelephone;
