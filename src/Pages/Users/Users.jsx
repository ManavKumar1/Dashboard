import React from "react";
import "./Users.scss";
import { demoUsers } from "../../Constants/DemoData";
import CustomTable from "../../components/CustomTable/CustomTable";
const Users = () => {
  const tableHeaders = Object.keys(demoUsers[0] || {});
  return (
    <div className='admin-users'>
      {/* <h1>User Details</h1> */}
      <CustomTable
        data={demoUsers}
        headers={tableHeaders}
        itemsPerPage={3}
        truncateLength={20}
      />
    </div>
  );
};

export default Users;
