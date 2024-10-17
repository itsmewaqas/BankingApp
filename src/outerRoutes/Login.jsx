import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginMethod } from '../redux/reducer/loginDetail';
import validateInfo from '../utilities/validation';
import CryptoAES from 'crypto-js/aes';
import CryptoENC from 'crypto-js/enc-utf8';
import CryptoJS from 'crypto-js';
import logo from '../assets/images/loginLogo.svg';
import { BiEnvelope, BiLock } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

import loginIcon1 from '../assets/images/loginEmailIcon.svg';
import loginIcon2 from '../assets/images/loginPasswordIcon.svg';

function Login() {

  const dispatch = useDispatch();

  const loginDetail = useSelector((state) => state);
  console.log(loginDetail);

  const initalState = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState(initalState);
  const [errors, setErrors] = useState({});
  const [pass, setpass] = useState(true);
  const [introScreen, setIntroScreen] = useState('videoMaskParent');

  const hideIntro = () => {
    setIntroScreen(introScreen === 'videoMaskParent' ? 'videoMask' : null);
  }

  const handleChnage = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    setErrors(validateInfo({ values }));
    if (values.email != '' &&
      values.password != '') {
      const encryptedPassword = CryptoAES.encrypt(values.password, 'your-secret-key').toString();
      dispatch(loginMethod({ ...values, password: encryptedPassword, }));
      if (values) {
        setValues({
          email: '',
          password: '',
        })
      }
    }
  }

  useEffect(() => {
  }, [])

  if (loginDetail.loading) {
    return (<Spinner animation="border" role="status" variant="primary" size="md">
      <span className="visually-hidden">Loading...</span>
    </Spinner>)
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={6}>
            <a className='loginLogo'><img src={logo} alt="" /></a>
            <form onSubmit={handleLogin} className='loginForm'>
              <h1>Get Started <span>Welcome To NGS Login your Account or <a href="#">Register here!</a></span></h1>
              <div className='mt-4 my-5'>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <div className='fieldBox'>
                    <i> <img src={loginIcon1} alt="" /></i>
                    <Form.Control type="email" name="email" value={values.email} placeholder="Enter Your Email Here" onChange={handleChnage} />
                  </div>
                  {errors.email && <p className='error'>{errors.email}</p>}
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <div className='fieldBox'>
                  <i> <img src={loginIcon2} alt="" /></i>
                    <Form.Control type={pass ? 'password' : 'text'} name="password" value={values.password} placeholder="Enter Your Password Here" onChange={handleChnage} />
                    <a onClick={() => setpass(!pass)}>
                      {pass == true ? <FiEye size={20} color='#9988A6' /> : <FiEyeOff size={20} color='#9988A6' />}
                    </a>
                  </div>
                  {errors.password && <p className='error'>{errors.password}</p>}
                  <a className='fgPassword'>Forgot Password ?</a>
                </Form.Group>
                <button className='loginBtn'>Login</button>
              </div>
            </form>
          </Col>
          <Col md={introScreen === 'videoMaskParent' ? null : 6}>
            <div className={introScreen}>
              {introScreen === 'videoMaskParent' ?
                <div className='videoContent2'>
                  <h2>Next Generation Symmetry</h2>
                  <button onClick={() => hideIntro()}>Start Now</button>
                </div>
                :
                <div className='videoContent1'>
                  <h2>Enter The Future of Low Code <span>Fintech Workflow Platform</span></h2>
                </div>}
              <video width="auto" height="auto" autoPlay loop muted className='loginVideo'>
                <source src={require('../assets/images/loginVideo.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
