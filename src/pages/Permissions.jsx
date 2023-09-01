import React from "react";
import TableRolesOrPermission from "../components/TableRolesOrPermission";
import DialogAddPermission from "../components/DialogAddPermission";
import TablePermission from "../components/TablePermission";

const TABLE_HEAD_PERMISSION = ["id", "name"];

const TABLE_ROWS_PERMISSION = [
  {
    id: "1",
    name: "create profile1",
    guard_name: "mobile",
  },
  {
    id: "2",
    name: "edit profile2",
    guard_name: "web ",
  },
  {
    id: "3",
    name: "create profile3",
    guard_name: "John ",
  },
  {
    id: "4",
    name: "delete profile4",
    guard_name: "web",
  },
  {
    id: "5",
    name: "delete profile5",
    guard_name: "web",
  },
  {
    id: "6",
    name: "delete profile6",
    guard_name: "web",
  },
  {
    id: "7",
    name: "delete profile7",
    guard_name: "web",
  },
  {
    id: "8",
    name: "delete profile8",
    guard_name: "web",
  },
];

const Permissions = () => {
  return (
    <div className="p-4">
      <div className="parent-roles">
        <div className="parent-top-table">
          <h2 className="title">Les permission</h2>
          <DialogAddPermission />
        </div>
        <div className="h-full w-full">
          <div className="">
            {/* <TableRolesOrPermission
              infoColumnsCandidate={TABLE_HEAD_PERMISSION}
              infoCondidate={TABLE_ROWS_PERMISSION}
            /> */}
            <TablePermission infoColumnsCandidate={TABLE_HEAD_PERMISSION}
              infoCondidate={TABLE_ROWS_PERMISSION}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Permissions;
