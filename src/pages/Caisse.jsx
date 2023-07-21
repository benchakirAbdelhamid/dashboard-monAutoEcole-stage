import Card from "../components/Card";
import TableAnalyze from "../components/TableAnalyze";

const Analytics = () => {
  const infoCard = [
    {
      id: 1,
      title: "Nbr series",
      nbr: 12,
    },
    {
      id: 2,
      title: "Note moyen",
      nbr: 33,
    },
    {
      id: 3,
      title: "Examen",
      nbr: "12/02/2023",
    },
    {
      id: 4,
      title: "Les avances",
      nbr: "230DH",
    },
  ];

  const infoColumnsFirstTable = [
      {
        id : 1,
        nameColumn :'--',
      },
      {
        id : 2,
        nameColumn :'CATEGORIE',
      },
      {
        id : 3,
        nameColumn :'CORRECTION',
      },
      {
        id : 4,
        nameColumn :'NOTE MOYEN',
      },
      {
        id : 5,
        nameColumn :'COMPLETE OU INCOMPLETE',
      },
    
  ]

  const infoFirstTableSeries = [
    {
      id: 1,
      serie: "Serie1",
      category: "B",
      correction: "Acceder",
      note_moyen: "30",
      complete_incomplete: 61,
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

  const infoColumnsSecondTableCours = [
    {
      id : 1,
      nameColumn :'--',
    },
    {
      id : 2,
      nameColumn :'Categorie',
    },
    {
      id : 3,
      nameColumn :'Complete ou incomplete',
    }
  ]

  const infoCoursTableSecond = [
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
      <Card info_card={infoCard} />
      </div>

      <section className="table_dashboard mb-5">
        <TableAnalyze titleTable = {{title : 'Les series'}} infoColumnsSeriesTable={infoColumnsFirstTable} infoSeriesTable = {infoFirstTableSeries} />
      </section>

      <section className="table_dashboard">
          <TableAnalyze titleTable = {{title : 'Les cours'}} infoColumnsCoursTable={infoColumnsSecondTableCours} infoCoursTable = {infoCoursTableSecond} />
      </section>
    </div>
  );
};

export default Analytics;
