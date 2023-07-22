import React from "react";
import TableUsersDesktop from "../components/TableUsersDesktop";
import TableUsersTelephone from "../components/TableUsersTelephone";
import NavTopTable from "../components/NavTopTable";
import Pagination from "../components/Pagination";

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

const Condidates = () => {
  return (
    <div className="p-4">
      <h3 className="title">Les condidates</h3>

      <NavTopTable />

      <div className="h-full w-full">
        <div className="display_non_md">
          <TableUsersDesktop
            infoColumnsCandidate={TABLE_HEAD}
            infoCondidate={TABLE_ROWS}
          />
        </div>

        <div className="display_non_lg">
          <TableUsersTelephone
            infoColumnsCandidate={TABLE_HEAD}
            infoCondidate={TABLE_ROWS}
          />
        </div>
      </div>

      <Pagination />
    </div>
  );
};

export default Condidates;
