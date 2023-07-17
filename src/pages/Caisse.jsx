const Analytics = () => {
  return (
    <div className="p-5">
      <div className="top_contend_card">
        <div className="card">
          <h3 className="title-card">Nbr series</h3>
          <div className="content-card">
            <b>12</b>
          </div>
        </div>
        <div className="card">
          <h3 className="title-card">Note moyen</h3>
          <div className="content-card">
            <b>33</b>
          </div>
        </div>
        <div className="card">
          <h3 className="title-card">Examen</h3>
          <div className="content-card">
            <b>12/02/2023</b>
          </div>
        </div>
        <div className="card">
          <h3 className="title-card">Les avances</h3>
          <div className="content-card">
            <b>230DH</b>
          </div>
        </div>
      </div>

      <section className="table_dashboard">
        <article>
          <div class="relative    ">
            <b className="pl-5 pt-6">Les series</b>
            <table class="table_overflow w-full mt-3 text-sm text-left">
              <thead class="text-xs  uppercase border-b border-black">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    - -
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Categorie
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Correction
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Note moyen
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Complete ou incomplete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    Serie 1
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">
                    <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-cyan-200 py-1.5 px-3 align-baseline font-sans text-xs font-bold uppercase leading-none">
                      ...
                    </div>{" "}
                    Acceder{" "}
                  </td>
                  <td class="px-6 py-4">30</td>
                  <td class="px-6 py-4">
                    <div class="animated-progress progress-blue">
                      <span style={{ width: `${51}%` }}>51%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    Serie 1
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">
                    <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-cyan-200 py-1.5 px-3 align-baseline font-sans text-xs font-bold uppercase leading-none">
                      ...
                    </div>{" "}
                    Acceder{" "}
                  </td>
                  <td class="px-6 py-4">30</td>
                  <td class="px-6 py-4">
                    <div class="animated-progress progress-blue">
                      <span style={{ width: `${75}%` }}>75%</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap "
                  >
                    Serie 1
                  </th>
                  <td class="px-6 py-4">B</td>
                  <td class="px-6 py-4">
                    <div class="center relative inline-block select-none whitespace-nowrap rounded-lg bg-cyan-200 py-1.5 px-3 align-baseline font-sans text-xs font-bold uppercase leading-none">
                      ...
                    </div>{" "}
                    Acceder{" "}
                  </td>
                  <td class="px-6 py-4">30</td>
                  <td class="px-6 py-4">
                    <div class="animated-progress progress-blue">
                      <span style={{ width: `${31}%` }}>31%</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
      </section>

      <section className="table_dashboard">
        <article>
          <div class="relative    ">
            <b className="pl-5 pt-6">Les cours</b>
            <table class="table_overflow w-full mt-3 text-sm text-left">
              <thead class="text-xs  uppercase border-b border-black">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    - -
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Categorie
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Complete ou incomplete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap "
                  >
                   Cours signalisation
                  </th>
                  <td class="px-6 py-4">B</td>

                  <td class="px-6 py-4">
                    <div class="animated-progress progress-blue">
                      <span style={{ width: `${51}%` }}>51%</span>
                    </div>
                  </td>
                  
                  
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap "
                  >
                   Cours signalisation
                  </th>
                  <td class="px-6 py-4">B</td>

                  <td class="px-6 py-4">
                    <div class="animated-progress progress-blue">
                      <span style={{ width: `${86}%` }}>86%</span>
                    </div>
                  </td>
                  
                  
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium whitespace-nowrap "
                  >
                   Cours signalisation
                  </th>
                  <td class="px-6 py-4">B</td>

                  <td class="px-6 py-4">
                    <div class="animated-progress progress-blue">
                      <span style={{ width: `${21}%` }}>21%</span>
                    </div>
                  </td>
                  
                  
                </tr>

              </tbody>
            </table>
          </div>
        </article>
      </section>

    </div>
  );
};

export default Analytics;
