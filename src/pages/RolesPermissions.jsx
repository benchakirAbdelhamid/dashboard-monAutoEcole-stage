import React, { useState } from "react";
import TableRolesPermission from "../components/TableRolesPermission";
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import { AiFillDelete, AiFillFileAdd } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import DialogAddPermission from "../components/DialogAddPermission";
import DialogAddRole from "../components/DialogAddRole";
// import { Button } from "@material-tailwind/react";
const TABLE_HEAD_ROLES = ["id", "name", "guard name"];

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
const TABLE_HEAD_PERMISSION = ["id", "name", "guard name"];

const TABLE_ROWS_PERMISSION = [
  {
    id: "1",
    name: "create profile",
    guard_name: "mobile",
  },
  {
    id: "2",
    name: "edit profile",
    guard_name: "web ",
  },
  {
    id: "3",
    name: "create profile",
    guard_name: "John ",
  },
  {
    id: "4",
    name: "delete profile",
    guard_name: "web",
  },
  {
    id: "5",
    name: "delete profile",
    guard_name: "web",
  },
  {
    id: "6",
    name: "delete profile",
    guard_name: "web",
  },
  {
    id: "7",
    name: "delete profile",
    guard_name: "web",
  },
  {
    id: "8",
    name: "delete profile",
    guard_name: "web",
  },
];

const RolesPermissions = () => {
  return (
    <div className="p-4">
      <div className="parent-roles">
        <div className="parent-top-table">
          <h2 className="title">Les roles</h2>

          <DialogAddRole/>

        </div>
        <div className="h-full w-full">
          <div className="display_non_md">
            <TableRolesPermission
              infoColumnsCandidate={TABLE_HEAD_ROLES}
              infoCondidate={TABLE_ROWS_ROLES}
            />
          </div>
        </div>
      </div>

      <div className="parent-roles">
        <div className="parent-top-table">
          <h2 className="title">Les permission</h2>
          <DialogAddPermission/>
        </div>
        <div className="h-full w-full">
          <div className="display_non_md">
            <TableRolesPermission
              infoColumnsCandidate={TABLE_HEAD_PERMISSION}
              infoCondidate={TABLE_ROWS_PERMISSION}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RolesPermissions;
