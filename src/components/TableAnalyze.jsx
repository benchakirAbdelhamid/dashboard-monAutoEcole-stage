import React, { useEffect } from "react";

const TableAnalyze = (props) => {
  return (
    <>
      <article>
        <div className="relative    ">
          <b className="pl-5 pt-6">
            {props.titleTable ? props.titleTable.title : ""}
            {props.titleTableInscription
              ? props.titleTableInscription.title
              : ""}
          </b>
          <table className=" table_overflow w-full mt-3 text-sm text-left">
            <thead className="text-xs  uppercase border_bottom">
              {props.infoColumnsTable ? (
                <tr>
                  {props.infoColumnsTable?.map((item) => {
                    return (
                      <th key={item.id} scope="col" className="px-6 py-3">
                        {item.nameColumn}
                      </th>
                    );
                  })}
                </tr>
              ) : (
                ""
              )}
              {/* ========== */}
              {props.infoColumnsSeriesTable ? (
                <tr>
                  {props.infoColumnsSeriesTable?.map((item) => {
                    return (
                      <th key={item.id} scope="col" className="px-6 py-3">
                        {item.nameColumn}
                      </th>
                    );
                  })}
                </tr>
              ) : (
                ""
              )}

              {/* ========= */}

              {props.infoColumnsCoursTable ? (
                <tr>
                  {props.infoColumnsCoursTable?.map((item) => {
                    return (
                      <th key={item.id} scope="col" className="px-6 py-3">
                        {item.nameColumn}
                      </th>
                    );
                  })}
                </tr>
              ) : (
                ""
              )}
            </thead>
            {props.infoTable ? (
              <tbody>
                {props.infoTable?.map((item) => {
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
                  );
                })}
              </tbody>
            ) : (
              ""
            )}
            {/* ========== */}
            {props.infoSeriesTable ? (
              <tbody>
                {props.infoSeriesTable?.map((item) => {
                  return (
                    <tr key={item.id}>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium whitespace-nowrap "
                      >
                        {item.serie}
                      </th>
                      <td className="px-6 py-4">{item.category}</td>
                      <td className="px-6 py-4">
                        <div className=" padg-table center relative inline-block select-none whitespace-nowrap   align-baseline font-sans text-xs font-bold uppercase leading-none">
                          ...
                        </div>

                        {item.correction}
                      </td>
                      <td className="px-6 py-4">{item.note_moyen} </td>
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
            ) : (
              ""
            )}
            {/* =========== */}

            {props.infoCoursTable ? (
              <tbody>
                {props.infoCoursTable?.map((item) => {
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
                            {" "}
                            {item.complete_incomplete}%
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            ) : (
              ""
            )}
          </table>
        </div>
      </article>
    </>
  );
};

export default TableAnalyze;
