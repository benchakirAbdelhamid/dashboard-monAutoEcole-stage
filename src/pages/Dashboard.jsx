import ColumnCharts from "../components/Chart/ColumnCharts";
import LineCharts from "../components/Chart/LineCharts";
import { BiTrendingUp } from "react-icons/bi";
import { BiTrendingDown } from "react-icons/bi";

const tableNouveauxInscription =[
  {
    id : 1,
    nom :'Mohammed ',
    prenom : 'Mohammed',
    category : 'B',
    ville : 'Fes',
    telephone : '0625142514'
  },
  {
    id : 2,
    nom :'Mohammed ',
    prenom : 'Mohammed',
    category : 'B',
    ville : 'Fes',
    telephone : '0625142514'
  },
  {
    id : 3,
    nom :'Mohammed ',
    prenom : 'Mohammed',
    category : 'B',
    ville : 'Fes',
    telephone : '0625142514'
  },
  {
    id : 4,
    nom :'Mohammed ',
    prenom : 'Mohammed',
    category : 'B',
    ville : 'Fes',
    telephone : '0625142514'
  },
  {
    id : 5,
    nom :'Mohammed ',
    prenom : 'Mohammed',
    category : 'B',
    ville : 'Fes',
    telephone : '0625142514'
  },
  {
    id : 6,
    nom :'Mohammed ',
    prenom : 'Mohammed',
    category : 'B',
    ville : 'Fes',
    telephone : '0625142514'
  },

]

const Dashboard = () => {



  return (
    <div className="p-6">
      <h2 className="pl-5 title"> Aujourd'hui </h2>

      <section className="top_dashboard">
        <article className="card_dashboard">
          <div className="card">
            <h3 className="title-card">Candidats</h3>
            <div className="content-card">
              <b>3,781</b>
              <p>
                +5.27% <BiTrendingUp />{" "}
              </p>
            </div>
          </div>
          <div className="card">
            <h3 className="title-card">Revenues</h3>
            <div className="content-card">
              <b>3,219DH</b>
            </div>
          </div>
          <div className="card">
            <h3 className="title-card">Nouveau inscriptions</h3>
            <div className="content-card">
              <b>12</b>
              <p>
                -0.26% <BiTrendingDown />{" "}
              </p>
            </div>
          </div>
          <div className="card">
            <h3 className="title-card">Visits</h3>
            <div className="content-card">
              <b>250</b>
              <p>
                +1.27% <BiTrendingUp />{" "}
              </p>
            </div>
          </div>
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

      <section className="table_dashboard">
        <article>
          <div className="relative    ">
            <b className="pl-5 pt-6">Nouveaux inscription</b>
            <table className="w-full mt-3 text-sm text-left">
              <thead className="text-xs  uppercase border_bottom">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nom complet
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Categorie
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ville
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Telephone
                  </th>
                </tr>
              </thead>
              <tbody>

                {tableNouveauxInscription?.map((item)=>{
                  return (
                    <tr key={item.id}>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    {item.nom} {item.prenom}
                  </th>
                  <td className="px-6 py-4"> {item.category} </td>
                  <td className="px-6 py-4">{item.ville} </td>
                  <td className="px-6 py-4">{item.telephone} </td>
                </tr>
                  )
                })}

              </tbody>
            </table>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Dashboard;
