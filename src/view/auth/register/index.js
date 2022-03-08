import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './styles';
import LogoRounded from '/public/img/logo-rounded.svg';
import LeftPic from '/public/img/sign-up-pic.png';
import useAuthStyles from '../authStyles';
import LogoBig from '/public/img/logo-desktop.svg';
import { Alert } from 'antd';
import { LoadingOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { RegisterService } from '../../../services/auth';
import { authActionCreators } from '../../../redux/actions/index';

const Register = () => {
  const authStyle = useAuthStyles();
  const classes = styles();

  const [showLoader, setShowLoader] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });

  const [error, setError] = useState({
    email: null,
    username: null,
    password: null,
    confirmPassword: null,
    errorMessage: null
  });

  const [values, setValues] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  async function onSubmit(event) {
    try {
      event.preventDefault();
      setShowLoader(true);
      const { email, username, password, confirmPassword, terms } = values;

      if (ValidateForm(values)) {
        const params = {
          email: values.email,
          username: values.username,
          password: values.password
        };
        const result = await RegisterService(params);
        if (result) dispatch(authActionCreators.registerUserSuccess(result));
      }
    } catch (err) {
      if (err.request.status == 401) {
        setError((prev) => ({ ...prev, errorMessage: 'The email address or password is incorrect' }));
      }
      if (err.request.status == 424) {
        setError((prev) => ({ ...prev, errorMessage: 'Username or email already exists.' }));
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
    let isTerm = false;
    if (name == 'email') {
      if (value == '') {
        setError((prev) => ({ ...prev, email: 'Please, enter a email' }));
      } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
        setError((prev) => ({ ...prev, email: null }));
      } else {
        setError((prev) => ({ ...prev, email: 'Your entry is not a valid email address.' }));
      }
    } else if (name == 'username') {
      if (value == '') {
        setError((prev) => ({ ...prev, username: 'Please enter your Username' }));
      } else if (value.length < 2) {
        setError((prev) => ({ ...prev, username: 'Username should be 2 letters at least' }));
      } else if (value.length > 30) {
        setError((prev) => ({ ...prev, username: 'Username should be 30 letters at most' }));
      } else {
        setError((prev) => ({ ...prev, username: null }));
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
    } else if (name == 'confirmPassword') {
      if (value != values.password) {
        setError((prev) => ({ ...prev, confirmPassword: 'Please make sure your passwords match' }));
      } else if (value.length == 0) {
        setError((prev) => ({ ...prev, confirmPassword: 'Please enter password again' }));
      } else {
        setError((prev) => ({ ...prev, confirmPassword: null }));
      }
    } else if (name == 'terms') {
      isTerm = true;
      if (terms.checked == false) {
        setError((prev) => ({
          ...prev,
          errorMessage: "Please, you need to read and accept Terms and Privacy Policy for join Spendtrack's community"
        }));
      } else {
        setError((prev) => ({ ...prev, errorMessage: null }));
      }
    }
    if (!isTerm) setValues((prev) => ({ ...prev, [name]: value }));
    else setValues((prev) => ({ ...prev, terms: !values.terms }));
  }

  function ValidateForm(values) {
    let isValidate = true;
    if (values.email == '' || values.email == null) {
      setError((prev) => ({ ...prev, email: 'Please, enter a email' }));
      isValidate = false;
    } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
      setError((prev) => ({ ...prev, email: null }));
    } else {
      setError((prev) => ({ ...prev, email: 'Your entry is not a valid email address.' }));
      isValidate = false;
    }

    if (values.username == '' || values.username == null) {
      setError((prev) => ({ ...prev, username: 'Please enter your Username' }));
      isValidate = false;
    } else if (values.username.length < 2) {
      setError((prev) => ({ ...prev, username: 'Username should be 2 letters at least' }));
      isValidate = false;
    } else if (values.username.length > 30) {
      setError((prev) => ({ ...prev, username: 'Username should be 30 letters at most' }));
      isValidate = false;
    } else {
      setError((prev) => ({ ...prev, username: null }));
    }

    if (values.password == '' || values.password == null) {
      setError((prev) => ({ ...prev, password: 'Please, enter a password' }));
      isValidate = false;
    } else if (values.password.length < 6) {
      setError((prev) => ({ ...prev, password: 'Password should be 6 letters at least' }));
      isValidate = false;
    } else if (values.password.length > 20) {
      setError((prev) => ({ ...prev, password: 'Password should be 20 letters at most' }));
      isValidate = false;
    } else {
      setError((prev) => ({ ...prev, password: null }));
    }

    if (values.confirmPassword != values.password) {
      setError((prev) => ({ ...prev, confirmPassword: 'Please make sure your passwords match' }));
      isValidate = false;
    } else if (values.confirmPassword == null || values.confirmPassword == '') {
      setError((prev) => ({ ...prev, confirmPassword: 'Please enter password again' }));
      isValidate = false;
    } else {
      setError((prev) => ({ ...prev, confirmPassword: null }));
    }

    if (values.terms != true) {
      setError((prev) => ({
        ...prev,
        errorMessage: "Please, you need to read and accept Terms and Privacy Policy for join Spendtrack's community"
      }));
      isValidate = false;
    } else {
      setError((prev) => ({ ...prev, errorMessage: null }));
    }
    return isValidate;
  }

  function showPasswordChange(value) {
    if (value == 'password') setShowPassword((prev) => ({ ...prev, password: !showPassword.password }));
    else setShowPassword((prev) => ({ ...prev, confirmPassword: !showPassword.confirmPassword }));
  }

  return (
    <div className={authStyle.root}>
      <p className={authStyle.authLink}>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
      <div className={authStyle.leftPic}>
        <img src={LeftPic} alt="" />
        <Link to="/welcome" className={authStyle.smallImg}>
          <img src={LogoRounded} alt="" />
        </Link>
      </div>

      <section className={authStyle.block}>
        <div>
          <Link to="/welcome" className={authStyle.authLogo}>
            <img src={LogoBig} />
          </Link>
          <h2 className={authStyle.title}>Welcome to Spendtrack</h2>
          <p className={`${authStyle.subtitle} ${classes.subtitle}`}>
            Let’s get you all set up so you can verify your nonprofit and begin settings up your first campaign.
          </p>

          <form className={authStyle.blockForm} method="post">
            <div className={authStyle.blockData}>
              <label className={authStyle.label}>Email</label>
              <input
                placeholder="Enter your email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                className={error.email ? authStyle.errorInput : ''}
              />
              {error.email && <label className={authStyle.errorLabel}>{error.email}</label>}
            </div>
            <div className={authStyle.blockData}>
              <label className={authStyle.label}>Username</label>
              <input
                placeholder="For example: Ted Kulakevich"
                id="username"
                name="username"
                type="text"
                value={values.username}
                onChange={handleChange}
                className={error.username ? authStyle.errorInput : ''}
              />
              {error.username && <label className={authStyle.errorLabel}>{error.username}</label>}
            </div>
            <div className={classes.doubleRow}>
              <div className={`${authStyle.blockData} ${classes.doubleRowElement}`}>
                <label className={authStyle.label}>Password</label>
                <div className={error.password ? authStyle.passwordError : authStyle.password}>
                  <input
                    placeholder="Enter your password"
                    type={showPassword.password ? 'text' : 'password'}
                    name="password"
                    id="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                  {showPassword.password ? (
                    <EyeInvisibleOutlined onClick={() => showPasswordChange('password')} />
                  ) : (
                    <EyeOutlined onClick={() => showPasswordChange('password')} />
                  )}
                </div>
                {error.password && <label className={authStyle.errorLabel}>{error.password}</label>}
              </div>

              <div className={`${authStyle.blockData} ${classes.doubleRowElement} ${classes.leftElement}`}>
                <label className={authStyle.label}>Confirm Password</label>
                <div className={error.confirmPassword ? authStyle.passwordError : authStyle.password}>
                  <input
                    placeholder="Confirm password"
                    type={showPassword.confirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    id="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                  {showPassword.confirmPassword ? (
                    <EyeInvisibleOutlined onClick={() => showPasswordChange('confirmPassword')} />
                  ) : (
                    <EyeOutlined onClick={() => showPasswordChange('confirmPassword')} />
                  )}
                </div>
                {error.confirmPassword && <label className={authStyle.errorLabel}>{error.confirmPassword}</label>}
              </div>
            </div>
            <div className={classes.terms}>
              <input
                type="checkbox"
                id="terms"
                name="terms"
                value={name}
                checked={values.terms}
                onClick={handleChange}
                onChange={handleChange}
              />
              <label className={authStyle.label}>
                I agree to the <Link to="">Terms</Link> and <Link to="">Privacy Policy</Link>
              </label>
            </div>
            {error.errorMessage && <Alert className={authStyle.alertError} message={error.errorMessage} type="error" />}
            <button type="submit" onClick={onSubmit} className={authStyle.submitBtn} name="button">
              {showLoader ? <LoadingOutlined /> : <span>Create Account</span>}
            </button>
          </form>
          <p className={authStyle.authLinkRes}>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Register;
