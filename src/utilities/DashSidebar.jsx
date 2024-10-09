import React, { useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { BiUserPin, BiMoneyWithdraw, BiCompass, BiChevronLeft, BiChevronDown, BiDiamond } from "react-icons/bi";
import menuData from '../redux/reducer/menuData';
import icon1 from '../assets/images/menuIcon1.svg';
import icon2 from '../assets/images/menuIcon2.svg';
import icon3 from '../assets/images/menuIcon3.svg';
import icon4 from '../assets/images/menuIcon4.svg';
import icon5 from '../assets/images/menuIcon5.svg';
import logo from '../assets/images/logo1.png';
import collapsLogo from '../assets/images/logo2.png';
import { useSelector } from 'react-redux';

function DashSidebar(props) {

  const [selectedMenu, selectedMenuSet] = useState("Channels");

  let navigate = useNavigate();
  const location = useLocation();

  const renderIcon = (icon) => {
    switch (icon) {
      case "Channels":
        return icon1;
      case "WorkflowProcesses":
        return icon2;
      case "APIList":
        return icon3;
      case "TeamsManagement":
        return icon4;
      case "Channels":
        return icon5;
      default:
        return icon5
    }
  }

  const menClick = (index) => {
    if (selectedMenu === index) {
      selectedMenuSet(null);
    } else {
      selectedMenuSet(index);
    }
  }

  return (
    <div className={props.sidebarCtrl}>
      {location.pathname == '/WorkflowEnviroment' ?
       <a className='logoCollaps' onClick={() => navigate('/Dashboard')}> <img src={collapsLogo} alt="" /> </a>
        :
        <a className='logo' onClick={() => navigate('/Dashboard')}> <img src={logo} alt="" /> </a>}
      <ul className='sidebar'>
        {menuData?.map((item, index) => (
          <li key={index.toString()}  >
            <Link to={item.menuLink}
              className={selectedMenu === item.menuTitle ? 'active' : ''}
              onClick={() => menClick(item.menuTitle)}>
              <img src={renderIcon(item.menuTitle)} alt="" />
              <title className={props.titleCtrl}>{item.menuTitle}</title>
              {/* {item.menuTitle && item.menuDataChild &&
                <dd>{selectedMenu === item.menuTitle ? <BiChevronDown size={24} /> : <BiChevronLeft size={24} />}</dd>} */}
            </Link>
            {/* {selectedMenu === item.menuTitle &&
              <ul>
                {item.menuDataChild?.map((cItem, index) => (
                  <li key={index.toString()}>
                    <Link to={cItem.cMenuItem}>{cItem.cMenuItem}</Link>
                  </li>
                ))}
              </ul>} */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashSidebar;


