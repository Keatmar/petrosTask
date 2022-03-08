import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import LogoRounded from '/public/img/logo-rounded.svg';
import LogoBig from '/public/img/logo-desktop.svg';
import SignInPic from '/public/img/sign-in-pic.png';
import useAuthStyles from '../authStyles';
import loginStyles from './styles';
import { LoadingOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { authActionCreators } from '../../../redux/actions/index';
import { LoginService } from '../../../services/auth';
import { Alert } from 'antd';

const Login = () => {
  const authStyle = useAuthStyles();
  const classes = loginStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showLoader, setShowLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState({
    email: null,
    password: null,
    errorMessage: null
  });

  const selector = useSelector((state) => state);

  async function onSubmit(event) {
    try {
      event.preventDefault();
      setShowLoader(true);
      const { email, password } = values;
      if (ValidateForm(email, password)) {
        const params = { email, password };
        const result = await LoginService(params);
        if (result) dispatch(authActionCreators.loginSuccess(result));
        navigate('/completeProfile');
      }
    } catch (err) {
      if (err.request.status == 401) {
        setError((prev) => ({ ...prev, errorMessage: 'The email address or password is incorrect' }));
      } else {
        setError((prev) => ({ ...prev, errorMessage: 'Something went wrong. Please try again in a few seconds' }));
      }
    } finally {
      setShowLoader(false);
    }
  }

  function handleChange(event) {
    const {
      target: { value, name }
    } = event;
    if (name == 'email') {
      if (value == null || value == '') {
        setError((prev) => ({ ...prev, email: 'Please, enter a email' }));
      } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
        setError((prev) => ({ ...prev, email: null }));
      } else {
        setError((prev) => ({ ...prev, email: 'Your entry is not a valid email address.' }));
      }
    } else if (name == 'password') {
      if (value == '') {
        setError((prev) => ({ ...prev, password: 'Please, enter a password' }));
      } else if (value.length < 6) {
        setError((prev) => ({ ...prev, password: 'Password should be 6 letters at least' }));
      } else if (value.length > 20) {
        setError((prev) => ({ ...prev, password: 'Password should be 20 letters at most' }));
      } else {
        setError((prev) => ({ ...prev, password: null }));
      }
    }
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function ValidateForm(email, password) {
    let isValidate = true;
    if (email == null || email == '') {
      setError((prev) => ({ ...prev, email: 'Please, enter a email' }));
      isValidate = false;
    } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      setError((prev) => ({ ...prev, email: null }));
    } else {
      setError((prev) => ({ ...prev, email: 'Your entry is not a valid email address.' }));
      isValidate = false;
    }
    if (password == '') {
      setError((prev) => ({ ...prev, password: 'Please, enter a password' }));
      isValidate = false;
    } else if (password.length < 6) {
      setError((prev) => ({ ...prev, password: 'Password should be 6 letters at least' }));
      isValidate = false;
    } else if (password.length > 20) {
      setError((prev) => ({ ...prev, email: 'Password should be 20 letters at most' }));
      isValidate = false;
    } else {
      setError((prev) => ({ ...prev, email: null }));
    }
    return isValidate;
  }

  function showPasswordChange() {
    setShowPassword(!showPassword);
  }

  return (
    <div className={authStyle.root}>
      <p className={authStyle.authLink}>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
      <div className={authStyle.leftPic}>
        <img src={SignInPic} alt="" />
        <Link to="/welcome" className={authStyle.smallImg}>
          <img src={LogoRounded} alt="logo" />
        </Link>
      </div>

      <section className={authStyle.block}>
        <div>
          <Link to="/welcome" className={authStyle.authLogo}>
            <img src={LogoBig} />
          </Link>
          <h2 className={authStyle.title}>Sign in to Spendtrack</h2>
          <p className={authStyle.subtitle}>Enter your login to access Spendtrack's fun!</p>
          <form className={authStyle.blockForm} method="post">
            <div className={authStyle.blockData}>
              <label className={authStyle.label}>Email address</label>
              <input
                placeholder="Enter your email"
                onChange={handleChange}
                className={error.email ? authStyle.errorInput : ''}
                value={values.email}
                type="email"
                name="email"
                id="email"
              />
              {error.email && <label className={authStyle.errorLabel}>{error.email}</label>}
            </div>
            <div className={authStyle.blockData}>
              <label className={authStyle.label}> Password</label>
              <Link className={classes.forgotPasswordLink} to="/forgotPassword">
                Forgot password?
              </Link>
              <div className={error.password ? authStyle.passwordError : authStyle.password}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={values.password}
                  id="password"
                  text="password"
                  name="password"
                />
                {showPassword ? (
                  <EyeInvisibleOutlined onClick={showPasswordChange} />
                ) : (
                  <EyeOutlined onClick={showPasswordChange} />
                )}
              </div>
              {error.password && <label className={authStyle.errorLabel}>{error.password}</label>}
            </div>
            {error.errorMessage && <Alert className={authStyle.alertError} message={error.errorMessage} type="error" />}
            <button onClick={onSubmit} className={authStyle.submitBtn} name="button" type="submit">
              {showLoader ? <LoadingOutlined /> : <span>Sign in</span>}
            </button>
            <p className={authStyle.authLinkRes}>
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
