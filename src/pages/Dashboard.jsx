import Card from "../components/Card";
import ColumnCharts from "../components/Chart/ColumnCharts";
import LineCharts from "../components/Chart/LineCharts";
import { BiTrendingUp } from "react-icons/bi";
import { BiTrendingDown } from "react-icons/bi";
import TableAnalyzeDesktop from "../components/TableAnalyzeDesktop";
import TableAnalyzeTelephone from "../components/TableAnalyzeTelephone";

const tableColumnsInscription = [
  {
    id: 1,
    nameColumn: "Nom complet",
  },
  {
    id: 2,
    nameColumn: "Categorie",
  },
  {
    id: 3,
    nameColumn: "Ville",
  },
  {
    id: 4,
    nameColumn: "Telephone",
  },
];
const tableNouveauxInscription = [
  {
    id: 1,
    nom: "Mohammed",
    prenom: "Mohammed",
    category: "A",
    ville: "Fes",
    telephone: "0625142514",
  },
  {
    id: 2,
    nom: "hamid ",
    prenom: "benchakir",
    category: "B",
    ville: "Fes",
    telephone: "0625142514",
  },
  {
    id: 3,
    nom: "Mohammed ",
    prenom: "Mohammed",
    category: "C",
    ville: "Fes",
    telephone: "0625142514",
  },
  {
    id: 4,
    nom: "Mohammed ",
    prenom: "Mohammed",
    category: "D",
    ville: "Fes",
    telephone: "0625142514",
  },
  {
    id: 5,
    nom: "Mohammed ",
    prenom: "Mohammed",
    category: "E",
    ville: "Fes",
    telephone: "0625142514",
  },
  {
    id: 6,
    nom: "Mohammed ",
    prenom: "Mohammed",
    category: "B",
    ville: "Fes",
    telephone: "0625142514",
  },
];
const infoCard = [
  {
    id: 1,
    title: "Candidats",
    nbr: "3.781",
    parcentage: "+5.27",
    icon: <BiTrendingUp />,
  },
  {
    id: 2,
    title: "Revenues",
    nbr: "3.219",
  },
  {
    id: 3,
    title: "Nouveau inscriptions",
    nbr: "12",
    parcentage: "-0.26",
    icon: <BiTrendingDown />,
  },
  {
    id: 4,
    title: "Visits",
    nbr: "250",
    parcentage: "+1.27",
    icon: <BiTrendingUp />,
  },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="pl-5 title"> Aujourd'hui </h2>

      <section className="top_dashboard">
        <article className="card_dashboard">
          <Card info_card={infoCard} />
        </article>

        <article className="ColumnCharts_dashboard">
          <h3>Inscriptions</h3>
          <ColumnCharts />
        </article>
      </section>

      <section className="LineCharts_dashboard">
        <article>
          <LineCharts />
        </article>
      </section>

      <section className="table_dashboard display_non_md">
        <TableAnalyzeDesktop
          titleTableInscription={{ title: "Nouveaux inscription" }}
          infoTable={tableNouveauxInscription}
          infoColumnsTable={tableColumnsInscription}
        />
      </section>

      <section className="table_dashboard display_non_lg">
        <TableAnalyzeTelephone
          titleTableInscription={{ title: "Nouveaux inscription" }}
          infoTable={tableNouveauxInscription}
          infoColumnsTable={tableColumnsInscription}
        />
      </section>
    </div>
  );
};

export default Dashboard;
