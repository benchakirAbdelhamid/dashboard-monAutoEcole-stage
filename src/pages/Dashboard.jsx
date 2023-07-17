import ColumnCharts from "../components/Chart/ColumnCharts";
import LineCharts from "../components/Chart/LineCharts";
import { BiTrendingUp } from "react-icons/bi";
import { BiTrendingDown } from "react-icons/bi";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="pl-5"> Aujourd'hui </h2>

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
          <div class="relative    ">
            <b className="pl-5 pt-6">Nouveaux inscription</b>
            <table class="w-full mt-3 text-sm text-left">
              <thead class="text-xs  uppercase border-b border-black">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Nom complet
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Categorie
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Ville
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Telephone
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    Mohammed Mohammed
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">Fes</td>
                  <td class="px-6 py-4">0625142514</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    Mohammed Mohammed
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">Fes</td>
                  <td class="px-6 py-4">0625142514</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    Mohammed Mohammed
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">Fes</td>
                  <td class="px-6 py-4">0625142514</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    Mohammed Mohammed
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">Fes</td>
                  <td class="px-6 py-4">0625142514</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    Mohammed Mohammed
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">Fes</td>
                  <td class="px-6 py-4">0625142514</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Dashboard;
