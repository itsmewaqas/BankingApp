import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { BiSolidGrid } from "react-icons/bi";


function OuterDashboard(props) {

  return (
    <div className='loginMain'>
      <div className='loginContainer'>
        <Outlet />
      </div>
    </div>
  );
}

export default OuterDashboard;