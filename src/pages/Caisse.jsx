const Analytics = () => {
  const infoCard = [
    {
      id: 1,
      title: "Nbr series",
      value: 12,
    },
    {
      id: 2,
      title: "Note moyen",
      value: 33,
    },
    {
      id: 3,
      title: "Examen",
      value: "12/02/2023",
    },
    {
      id: 4,
      title: "Les avances",
      value: "230DH",
    },
  ];

  const infoFirstTableSeries = [
    {
      id: 1,
      serie: "Serie1",
      category: "B",
      correction: "Acceder",
      note_moyen: "30",
      complete_incomplete: 51,
    },
    {
      id: 2,
      serie: "Serie1",
      category: "B",
      correction: "Acceder",
      note_moyen: "30",
      complete_incomplete: 75,
    },
    {
      id: 3,
      serie: "Serie1",
      category: "B",
      correction: "Acceder",
      note_moyen: "30",
      complete_incomplete: 31,
    },
  ];

  const infoSecondTableSeries = [
    {
      id: 1,
      cours: "Cours signalisation",
      category: "B",
      complete_incomplete: 51,
    },
    {
      id: 2,
      cours: "Cours signalisation",
      category: "B",
      complete_incomplete: 80,
    },
    {
      id: 3,
      cours: "Cours signalisation",
      category: "B",
      complete_incomplete: 30,
    },
  ];

  return (
    <div className="p-3">
      <div className="top_contend_card">
        {infoCard?.map((item) => {
          return (
            <div className="card" key={item.id}>
              <h3 className="title-card">{item.title}</h3>
              <div className="content-card">
                <b>{item.value}</b>
              </div>
            </div>
          );
        })}
      </div>

      <section className="table_dashboard mb-5">
        <article>
          <div className="relative    ">
            <b className="pl-5 pt-6">Les series</b>
            <table className="table_overflow w-full mt-3 text-sm text-left">
              <thead className="text-xs  uppercase border_bottom">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    - -
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Categorie
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Correction
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Note moyen
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Complete ou incomplete
                  </th>
                </tr>
              </thead>
              <tbody>
                {infoFirstTableSeries?.map((item) => {
                  return (
                    <tr key={item.id}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap "
                      >
                        {item.serie}
                      </th>
                      <td className="px-6 py-4"> {item.category}</td>
                      <td className="px-6 py-4">
                        <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-cyan-100 py-1.5 px-3 align-baseline font-sans text-xs font-bold uppercase leading-none">
                          ...
                        </div>{" "}
                        {item.correction}
                      </td>
                      <td className="px-6 py-4"> {item.note_moyen}</td>
                      <td className="px-6 py-4">
                        <div className="animated-progress progress-blue">
                          <span
                            style={{ width: `${item.complete_incomplete}%` }}
                          >
                            {" "}
                            {item.complete_incomplete}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </article>
      </section>

      <section className="table_dashboard">
        <article>
          <div className="relative    ">
            <b className="pl-5 pt-6">Les cours</b>
            <table className="table_overflow w-full mt-3 text-sm text-left">
              <thead className="text-xs  uppercase border_bottom">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    - -
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Categorie
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Complete ou incomplete
                  </th>
                </tr>
              </thead>
              <tbody>
                {infoSecondTableSeries?.map((item) => {
                  return (
                    <tr key={item.id}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap "
                      >
                        {item.cours}
                      </th>
                      <td className="px-6 py-4">{item.category}</td>

                      <td className="px-6 py-4">
                        <div className="animated-progress progress-blue">
                          <span
                            style={{ width: `${item.complete_incomplete}%` }}
                          >
                            {item.complete_incomplete}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Analytics;
