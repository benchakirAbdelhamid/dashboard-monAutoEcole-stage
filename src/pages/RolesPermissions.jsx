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
        "id":'2',
        "name":"edit profile1",
        "guard_name":"web1",
        "pivot":{
          "role_id":1,
          "permission_id":2
        }
      },
      {
        "id":'5',
        "name":"edit profile5",
        "guard_name":"web5",
        "pivot":{
          "role_id":1,
          "permission_id":2
        }
      },
      {
        "id":'50',
        "name":"edit profile50",
        "guard_name":"web5",
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
        "id":'5',
        "name":"edit profile2",
        "guard_name":"web2",
        "pivot":{
          "role_id":3,
          "permission_id":5
        }
      },
      {
        "id":'56',
        "name":"edit profile26",
        "guard_name":"web26",
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
        "id":'8',
        "name":"edit profile3",
        "guard_name":"web3",
        "pivot":{
          "role_id":1,
          "permission_id":2
        }
      },
      {
        "id":'8',
        "name":"edit profile30",
        "guard_name":"web30",
        "pivot":{
          "role_id":1,
          "permission_id":2
        }
      },
      {
        "id":'8',
        "name":"edit profile10",
        "guard_name":"web10",
        "pivot":{
          "role_id":1,
          "permission_id":2
        }
      },
      {
        "id":'8',
        "name":"edit profile8",
        "guard_name":"web8",
        "pivot":{
          "role_id":1,
          "permission_id":2
        }
      }
    ]
  },

]




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
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default RolesPermissions;
