import React, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import forgotPasswordStyles from './styles';
import LogoRounded from '/public/img/logo-rounded.svg';
import LogoBig from '/public/img/logo-desktop.svg';
import ForgotPasswordImage from '/public/img/forgot-password-pic.png';
import { useDispatch } from 'react-redux';
import CodeInput from '../../../components/Helper/CodeInput';
import { LoadingOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import useAuthStyles from '../authStyles';

const ForgotPassword = ({ title }) => {
  const classes = forgotPasswordStyles();
  const authStyle = useAuthStyles();

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    userId: null,
    email: null,
    oldPassword: null,
    newPassword: null,
    confirmNewPassword: null
  });

  const [verificationCode, setVerificationCode] = useState('000000');

  const [codes, setCodes] = useState({
    userCode: '',
    code: null
  });

  const [error, setError] = useState({
    email: null,
    error: null
  });

  const dispatch = useDispatch();

  const [showPage, setShowPage] = useState({
    showForgotPassword: true,
    showVerificationCode: false,
    showEnterNewPassword: false
  });

  function handleBack() {
    navigate('/login');
  }
  function handleEmail(e) {
    if (e.target.value == null || e.target.value == '') {
      setError((prev) => ({ ...prev, email: 'Please, enter a email' }));
    } else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)) {
      setError((prev) => ({ ...prev, email: null }));
      setValues((prev) => ({ ...prev, email: e.target.value }));
    } else {
      setError((prev) => ({ ...prev, email: 'Your entry is not a valid email address.' }));
    }
  }

  function handlePasswords(e) {
    const { value, name } = e.target;
    if (error) setError((prev) => ({ ...prev, error: '' }));
    setValues((prev) => ({ ...prev, password: value }));
  }

  async function handlePasswordSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const { oldPassword, newPassword, confirmNewPassword } = passwords;
      if (newPassword === '' || confirmNewPassword === '') throw new Error('Fields must not be empty.');
      if (newPassword.length < 6) throw new Error('Password must be 6 letters at least.');
      if (newPassword.length > 20) throw new Error('Password must be 20 letters at most.');
      if (newPassword === confirmNewPassword) {
        let seedPw = await (await bip39.mnemonicToSeed(newPassword.trim())).toString('hex');
        let sha256Pw = crypto.SHA256(seedPw);
        const seedHashPw = sha256Pw.toString(crypto.enc.Hex);

        if (oldPassword === seedHashPw) {
          throw new Error('Your new password must be different from your previous password.');
        } else {
          await promisify(
            authActionCreators.updateSettingsUser,
            {
              pUserId: userId,
              pOldPassword: oldPassword,
              pNewPassword: seedHashPw
            },
            dispatch
          );
          setLoading(false);
          navigate(PATHS.LOGIN);
        }
      } else {
        throw new Error('Passwords do not match.');
      }
    } catch (error) {
      setLoading(false);
      setError((prev) => ({ ...prev, error: '' }));
    }
  }

  function verifyCode() {
    setLoading(true);
    const { userCode, code } = codes;
    if (code === userCode) {
      setLoading(false);
      setError((prev) => ({ ...prev, error: '' }));
      setShowPage((prev) => ({ ...prev, showVerificationCode: false }));
      setShowPage((prev) => ({ ...prev, showEnterNewPassword: true }));
    } else {
      setLoading(false);
      setError('Incorrect code. Please try again.');
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    if (error.email == null) {
      const seedBuffer = await bip39.mnemonicToSeed(email).toString('hex');
      const sha256Email = crypto.SHA256(seedBuffer);
      const seedHash = sha256Email.toString(crypto.enc.Hex);
      try {
        const response = await promisify(authActionCreators.getUserByEmail, { email: seedHash }, dispatch);
        console.log('response..', response);
        if (response.exists) {
          const { password, userId } = response;
          setPasswords((prev) => ({ ...prev, oldPassword: password }));
          setUserId(userId);
          const code = await promisify(
            authActionCreators.forgotPassword,
            {
              email
            },
            dispatch
          );
          setLoading(false);
          setCodes({
            userCode: '',
            code
          });

          setShowPage((prev) => ({ ...prev, showForgotPassword: false }));
          setShowPage((prev) => ({ ...prev, showVerificationCode: true }));
        } else {
          throw new Error('Email address does not exist in our database.');
        }
      } catch (error) {
        setLoading(false);
        setError((prev) => ({ ...prev, error: error.message }));
      }
    } else {
      setLoading(false);
    }
  }

  return (
    <div className={authStyle.root}>
      <p className={authStyle.authLink}>
        Not a member? <Link to="/register">Sign up</Link>
      </p>
      <div className={authStyle.leftPic}>
        <img src={ForgotPasswordImage} alt="" />
        <Link to="/welcome" className={authStyle.smallImg}>
          <img src={LogoRounded} className="logo" alt="logo" />
        </Link>
      </div>

      <section className={authStyle.block}>
        <Link to="/welcome" className={authStyle.authLogo}>
          <img src={LogoBig} />
        </Link>
        <div>
          {/* --- Step 1 --- */}
          {showPage.showForgotPassword ? (
            <Fragment>
              <h2 className={authStyle.title}>Forgot Password?</h2>
              <div className={classes.subtitle}>
                <p className={`${authStyle.subtitle} ${classes.subtitle1}`}>
                  Enter the email address you used when you joined and we’ll send you instructions to reset your
                  password.
                </p>
                <p className={`${authStyle.subtitle} ${classes.subtitle2}`}>
                  For security reasons, we do NOT store your password. So rest assured that we will never send your
                  password via email.
                </p>
              </div>

              <form className={authStyle.blockForm}>
                <div className={authStyle.blockData}>
                  <label className={authStyle.label}>Email address</label>
                  <input
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className={error.email ? authStyle.errorInput : ''}
                    onChange={handleEmail}
                  />
                  {error.email && <label className={authStyle.errorLabel}>{error.email}</label>}
                </div>
                {error.error && (
                  <Alert
                    style={{ marginTop: 12, marginBottom: 0 }}
                    message={error.error}
                    className={authStyle.alertError}
                    type="error"
                  />
                )}
                <button
                  type="submit"
                  className={error.email ? classes.authSubmitBtnError : authStyle.submitBtn}
                  name="button"
                  disabled={error.error}
                  onClick={handleSubmit}
                >
                  {loading ? <LoadingOutlined style={{ fontSize: 24 }} /> : 'Send instructions'}
                </button>
              </form>
            </Fragment>
          ) : null}
          {/* --- Step 2 --- */}
          {showPage.showVerificationCode ? (
            <Fragment>
              <h2>Enter verification code</h2>
              <p>You need to confirm your email in order to change your password. Verification code has been sent!</p>
              <div className={classes.codeInput}>
                <CodeInput setVerificationCode={setVerificationCode} />
              </div>
              {error.error ? (
                <alert style={{ marginTop: 12, marginBottom: 0 }} message={error.error} type="error" />
              ) : (
                <div className={classes.authCodeVerificationCode}>
                  <button
                    type="submit"
                    className={`${classes.authCodeVerificationBtn}`}
                    name="button"
                    disabled={error.error}
                    onClick={verifyCode}
                  >
                    {loading ? <LoadingOutlined style={{ fontSize: 24 }} /> : 'Confirm verification code'}
                  </button>
                </div>
              )}
            </Fragment>
          ) : null}
          {/* --- Step 3 --- */}
          {showPage.showEnterNewPassword ? (
            <Fragment>
              <h2>Enter new password</h2>
              <p>
                Please enter and confirm the new password. We recommend using a password with a minimum of 8 characters.
              </p>
              <form className={classes.authBlockForm}>
                <div className={classes.doubleRow}>
                  <div className={classes.authBlockData}>
                    <label>Password</label>
                    <input
                      type="password"
                      id="password"
                      name="newPassword"
                      placeholder="Enter your password"
                      onChange={handlePasswords}
                    />
                  </div>
                  <div className={classes.authBlockData}>
                    <label>Confirm password</label>
                    <input
                      type="password"
                      id="password"
                      name="confirmNewPassword"
                      placeholder="Confirm password"
                      onChange={handlePasswords}
                    />
                  </div>
                </div>
                {error.error ? (
                  <alert style={{ marginTop: 12, marginBottom: 0 }} message={error.error} type="error" />
                ) : (
                  <button
                    type="submit"
                    className={!error.error ? classes.authSubmitBtnError : classes.authSubmitBtn}
                    name="button"
                    disabled={error.error}
                    onClick={handlePasswordSubmit}
                  >
                    {loading ? <LoadingOutlined style={{ fontSize: 24 }} /> : 'Change Password'}
                  </button>
                )}
              </form>
            </Fragment>
          ) : null}
          <p className={authStyle.authLinkRes}>
            Not a member? <Link to="/register">Sign up</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ForgotPassword;
