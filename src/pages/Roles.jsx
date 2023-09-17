import React from "react";
import TableRoles from "../components/Tables/TableRoles";
import DialogAddRole from "../components/Dialog/DialogAddRole";
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

const TABLE_ROLES_PERMISSION = [
  {
    id: 1,
    name: "superadmin1",
    guard_name: "web1",
    permissions: [
      {
        id: "1",
        name: "create profile1",
        guard_name: "mobile",
        pivot: {
          role_id: 1,
          permission_id: 2,
        },
      },
      {
        id: "2",
        name: "edit profile2",
        guard_name: "web ",
        pivot: {
          role_id: 1,
          permission_id: 2,
        },
      },
      {
        id: "3",
        name: "create profile3",
        guard_name: "John ",
        pivot: {
          role_id: 1,
          permission_id: 2,
        },
      },
    ],
  },
  {
    id: 2,
    name: "superadmin2",
    guard_name: "web2",
    permissions: [
      {
        id: "4",
        name: "delete profile4",
        guard_name: "web",
        pivot: {
          role_id: 3,
          permission_id: 5,
        },
      },
      {
        id: "5",
        name: "delete profile5",
        guard_name: "web",
        pivot: {
          role_id: 3,
          permission_id: 5,
        },
      },
    ],
  },
  {
    id: 3,
    name: "superadmin3",
    guard_name: "web3",
    permissions: [
      {
        id: "6",
        name: "delete profile6",
        guard_name: "web",
        pivot: {
          role_id: 1,
          permission_id: 2,
        },
      },
      {
        id: "7",
        name: "delete profile7",
        guard_name: "web",
        pivot: {
          role_id: 1,
          permission_id: 2,
        },
      },
      {
        id: "8",
        name: "delete profile8",
        guard_name: "web",
        pivot: {
          role_id: 1,
          permission_id: 2,
        },
      },
      {
        id: "1",
        name: "create profile1",
        guard_name: "mobile",
        pivot: {
          role_id: 1,
          permission_id: 2,
        },
      },
    ],
  },
  {
    id: 4,
    name: "superadmin4",
    guard_name: "web4",
    permissions: [
      {
        id: "2",
        name: "edit profile2",
        guard_name: "web ",
        pivot: {
          role_id: 1,
          permission_id: 2,
        },
      },
      {
        id: "4",
        name: "delete profile4",
        guard_name: "web",
        pivot: {
          role_id: 1,
          permission_id: 2,
        },
      },
      {
        id: "1",
        name: "create profile1",
        guard_name: "mobile",
        pivot: {
          role_id: 1,
          permission_id: 2,
        },
      },
    ],
  },
  {
    id: 5,
    name: "superadmin5",
    guard_name: "web5",
    permissions: [
      {
        id: "4",
        name: "delete profile4",
        guard_name: "web",
        pivot: {
          role_id: 1,
          permission_id: 2,
        },
      },
    ],
  },
];

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

const Roles = () => {
  return (
    <div className="p-4">
      <div className="parent-roles">
        <div className="parent-top-table">
          <h2 className="title">Les roles</h2>
          <DialogAddRole infoRowsPermission={TABLE_ROWS_PERMISSION} />
        </div>
        <div className="h-full w-full">
          <div className="">
            <TableRoles
              infoColumnsCandidate={TABLE_HEAD_ROLES}
              infoCondidate={TABLE_ROLES_PERMISSION}
              infoRowsPermission={TABLE_ROWS_PERMISSION}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
