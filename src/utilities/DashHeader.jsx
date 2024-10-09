import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Form } from 'react-bootstrap';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { BiLogOutCircle, BiSolidGrid } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/images/logo.svg';
import arrowDown from '../assets/images/arrowDown.svg';
import { logout } from '../redux/reducer/loginDetail';
import SearchBox from '../sharedComponents/SearchBox';

function DashHeader(props) {

  const dispatch = useDispatch();

  const location = useLocation();

  const data = useSelector((state) => state);

  let navigate = useNavigate();

  const [menuSearch, setmenuSearch] = useState();

  const userLogout = () => {
    dispatch(logout());
    localStorage.clear();
    navigate('/');
  }

  const keyUp = (event) => {
    setmenuSearch(event.key)
  }

  useEffect(() => {
  }, []);

  return (
    <div>
      {location.pathname == '/WorkflowEnviroment' ? null :
        <div className='dashHeader'>
          <div className='headerSearchBox'>
            <input type="search" className='headerSearch' placeholder='Search Reports, Folders, and more' name='' onKeyUp={keyUp} />
          </div>
          {menuSearch && <SearchBox menuSearch={menuSearch} setmenuSearch={setmenuSearch} />}
          <ul>
            <li><a onClick={() => userLogout()}><BiLogOutCircle color='red' size={20} /></a></li>
          </ul>
          <a className='headerProfile'><span id="animate1"></span><i>QK</i></a>
        </div>}
    </div>
  );
}

export default DashHeader;