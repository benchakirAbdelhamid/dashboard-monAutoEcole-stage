import React from "react";
import TableRolesOrPermission from "../components/TableRolesOrPermission";
import DialogAddRole from "../components/DialogAddRole";
const TABLE_HEAD_ROLES = ["id", "name"];

const TABLE_ROWS_ROLES = [
  {
    id: "1",
    name: "superadmin",
    guard_name: "web",
  },
  {
    id: "2",
    name: " superadmin",
    guard_name: "John ",
  },
  {
    id: "3",
    name: "superadmin",
    guard_name: "John ",
  },
  {
    id: "4",
    name: "superadmin",
    guard_name: "web",
  },
];

const Roles = () => {
  return (
    <div className="p-4">
      <div className="parent-roles">
        <div className="parent-top-table">
          <h2 className="title">Les roles</h2>
          <DialogAddRole />
        </div>
        <div className="h-full w-full">
          <div className="">
            <TableRolesOrPermission
              infoColumnsCandidate={TABLE_HEAD_ROLES}
              infoCondidate={TABLE_ROWS_ROLES}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
