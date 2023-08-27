import React, { useState } from "react";
import TableRolesPermission from "../components/TableRolesPermission";
import { Button, IconButton, Tooltip } from "@material-tailwind/react";
import { AiFillDelete, AiFillFileAdd } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import DialogAddPermission from "../components/DialogAddPermission";
import DialogAddRole from "../components/DialogAddRole";
// import { Button } from "@material-tailwind/react";


const COLUMNS_ROLES_PERMISSION = [
  'Id Roles',
  'Name Roles',
  'Guard Name Roles',
  'Permissions',
]
const TABLE_ROLES_PERMISSION = [
  {
    "id":1,
    "name":"superadmin1",
    "guard_name":"web1",
    "permissions": [
      {
        "id": "1",
        "name": "create profile1",
        "guard_name": "mobile",
        "pivot":{
          "role_id":1,
          "permission_id":2
        }
      },
      {
        "id": "2",
        "name": "edit profile2",
        "guard_name": "web ",
        "pivot":{
          "role_id":1,
          "permission_id":2
        }
      },
      {
        "id": "3",
        "name": "create profile3",
        "guard_name": "John ",
        "pivot":{
          "role_id":1,
          "permission_id":2
        }
      }
    ]
  },
  {
    "id":2,
    "name":"superadmin2",
    "guard_name":"web2",
    "permissions": [
      {
        "id": "4",
        "name": "delete profile4",
        "guard_name": "web",
        "pivot":{
          "role_id":3,
          "permission_id":5
        }
      },
      {
        "id": "5",
        "name": "delete profile5",
        "guard_name": "web",
        "pivot":{
          "role_id":3,
          "permission_id":5
        }
      }
    ]
  },
  {
    "id":3,
    "name":"superadmin3",
    "guard_name":"web3",
    "permissions": [
      {
        "id": "6",
        "name": "delete profile6",
        "guard_name": "web",
        "pivot":{
          "role_id":1,
          "permission_id":2
        }
      },
      {
        "id": "7",
        "name": "delete profile7",
        "guard_name": "web",
        "pivot":{
          "role_id":1,
          "permission_id":2
        }
      },
      {
        "id": "8",
        "name": "delete profile8",
        "guard_name": "web",
        "pivot":{
          "role_id":1,
          "permission_id":2
        }
      },
      {
        "id": "1",
        "name": "create profile1",
        "guard_name": "mobile",
        "pivot":{
          "role_id":1,
          "permission_id":2
        }
      }
    ]
  },

]

const VALUE_ROWS_PERMISSION = [
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




const RolesPermissions = () => {
  return (
    <div className="p-4">
      <div className="parent-roles">
        <div className="parent-top-table">
          <h2 className="title">Les roles permission</h2>
        </div>
        <div className="h-full w-full">
          <div className="display_non_md">
            <TableRolesPermission
              COLUMNS_ROLES_PERMISSION={COLUMNS_ROLES_PERMISSION}
              TABLE_ROLES_PERMISSION={TABLE_ROLES_PERMISSION}
              VALUE_ROWS_PERMISSION={VALUE_ROWS_PERMISSION}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default RolesPermissions;
