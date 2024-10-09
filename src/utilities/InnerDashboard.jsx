import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from "react-router-dom";
import DashHeader from '../utilities/DashHeader';
import DashSidebar from '../utilities/DashSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function InnerDashboard(props) {

  const data = useSelector((state) => state);
  const location = useLocation();

  const [sidebarCtrl, sidebarCtrlSet] = useState("dSidebar");
  const [titleCtrl, titleCtrlSet] = useState("titleShow");
  const [dashContainer, SetdashContainer] = useState("dContainer");
  const [envContainer, SetenvContainer] = useState("envContainer");

  const sidebarCtrlFunc = () => {
    sidebarCtrlSet(sidebarCtrl == 'dSidebar' ? 'dSidebarCollaps' : 'dSidebar');
    titleCtrlSet(titleCtrl == 'titleShow' ? 'titleHide' : 'titleShow');
    SetdashContainer(dashContainer == 'dContainer' ? 'dContainerCollaps' : 'dContainer');
    SetenvContainer(envContainer == 'envContainer' ? 'envContainerCollaps' : 'envContainer');
  }

  useEffect(() => {
  }, [])

  return (
    <div className={`dMain`}>
      <ToastContainer />
      <DashHeader
        sidebarCtrlFunc={sidebarCtrlFunc}
        titleCtrl={titleCtrl} />
      <div>
        {location.pathname == '/WorkflowEnviroment' ?
          <DashSidebar
            sidebarCtrl={sidebarCtrl == 'dSidebar' ? 'dSidebarCollaps' : ''}
            titleCtrl={titleCtrl == 'titleShow' ? 'titleHide' : ''} />
          :
          <DashSidebar
            sidebarCtrl={sidebarCtrl}
            titleCtrl={titleCtrl} />
        }
        {location.pathname == '/WorkflowEnviroment' ?
          <div className={envContainer == 'envContainer' ? 'envContainerCollaps' : ''}>
            <div className='dContainerInner'>
              <Outlet />
            </div>
          </div>
          :
          <div className={dashContainer}>
            <div className='dContainerInner'>
              <Outlet />
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default InnerDashboard;