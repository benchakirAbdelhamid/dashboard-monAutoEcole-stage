import React, { useEffect } from "react";
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

        {/* =========info table Nouveaux inscription=========== */}
        {row.nom ? (
          <TableCell className="tbody_table_md" component="th" scope="row">
            {row.nom} {row.prenom}
          </TableCell>
        ) : (
          ""
        )}
        {/* =========info table  series =========== */}
        {row.serie ? (
          <TableCell className="tbody_table_md" component="th" scope="row">
            {row.serie}
          </TableCell>
        ) : (
          ""
        )}
        {/* =========info table  cours=========== */}
        {row.cours ? (
          <TableCell className="tbody_table_md" component="th" scope="row">
            {row.cours}
          </TableCell>
        ) : (
          ""
        )}
        {/* =========info table  series and cours and Nouveaux inscription=========== */}
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
                    {/* =========info table Nouveaux inscription=========== */}
                    {row.ville ? (
                      <TableCell className="title_table_md"> Ville </TableCell>
                    ) : (
                      ""
                    )}
                    {/* =========info table Nouveaux inscription=========== */}
                    {row.telephone ? (
                      <TableCell className="title_table_md">
                        {" "}
                        Telephone{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}
                    {/* =========info table series=========== */}
                    {row.correction ? (
                      <TableCell className="title_table_md">
                        {" "}
                        Correction{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}
                    {/* =========info table series=========== */}
                    {row.note_moyen ? (
                      <TableCell className="title_table_md">
                        {" "}
                        Note moyen{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}
                    {/* =========info table series=========== */}
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
                    {/* =========info table Nouveaux inscription=========== */}
                    {row.ville ? (
                      <TableCell className="title_table_md">
                        {" "}
                        {row.ville}{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}
                    {/* =========info table Nouveaux inscription=========== */}
                    {row.telephone ? (
                      <TableCell className="title_table_md">
                        {" "}
                        {row.telephone}{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}
                    {/* =========info table Nouveaux series=========== */}
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
                    {/* =========info table Nouveaux series=========== */}
                    {row.note_moyen ? (
                      <TableCell className="title_table_md">
                        {" "}
                        {row.note_moyen}{" "}
                      </TableCell>
                    ) : (
                      ""
                    )}
                    {/* =========info table Nouveaux series and cours=========== */}
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
      {/*========= title table  Nouveaux inscription======*/}
      {props.titleTableInscription ? (
        <h2 className="title_table_md"> {props.titleTableInscription.title} </h2>
      ) : (
        ""
      )}

      {/*========= title table series======*/}
      {props.titleTable ? <h2 className="title_table_md"> {props.titleTable.title} </h2> : ""}

      {/*========= title table  cours======*/}
      {props.titleTableCourse ? <h2  className="title_table_md"> {props.titleTableCourse.title} </h2> : ""}

      {/* ==========info table Nouveaux inscription========== */}
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
      {/* ==========info table Series========== */}
      {props.infoSeriesTable ? (
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
              {props.infoSeriesTable.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        ""
      )}

      {/* ==========info table cours========== */}
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
