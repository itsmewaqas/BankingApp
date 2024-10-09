import React, { useState, useEffect } from 'react';
import {
  Routes,
  useLocation,
  Route,
  Navigate
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import OuterDashboard from './utilities/OuterDashboard.jsx'
import Login from './outerRoutes/Login.jsx';
import InnerDashboard from './utilities/InnerDashboard.jsx';
import Dashboard from './innerRoutes/Dashboard.jsx';
import Channels from './innerRoutes/Channels.jsx';
import WorkflowProcesses from './innerRoutes/WorkflowProcesses.jsx';
import WorkflowEnviroment from './innerRoutes/WorkflowEnviroment.jsx';
import APIList from './innerRoutes/APIList.jsx';
import TeamsManagement from './innerRoutes/TeamsManagement.jsx';
import Users from './innerRoutes/Users.jsx';
import NoMatch from './NoMatch.jsx';

function Routers(props) {

  const { loginDetail } = useSelector((state) => state);
  console.log('get loginDetail', loginDetail);

  useEffect(() => {
  }, [])

  return (
    <div>
      <Routes>
        {loginDetail.isAuth == false ?
          <Route path="/" element={<OuterDashboard />}>
            <Route path="/Login" element={<Navigate to="/" />} />
            <Route exact path="/" element={<Login />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
          :
          <Route path="/" element={<InnerDashboard />}>
            {/* <Route exact path="/" element={<Dashboard />} />
            <Route path="Dashboard" element={<Dashboard />} /> */}
            <Route exact path="/" element={<Channels />} />
            <Route path="Channels" element={<Channels />} />
            <Route path="WorkflowProcesses" element={<WorkflowProcesses />} />
            <Route path="WorkflowEnviroment" element={<WorkflowEnviroment />} />
            <Route path="APIList" element={<APIList />} />
            <Route path="TeamsManagement" element={<TeamsManagement />} />
            <Route path="Users" element={<Users />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        }
      </Routes>
    </div>
  );
}

export default Routers;
