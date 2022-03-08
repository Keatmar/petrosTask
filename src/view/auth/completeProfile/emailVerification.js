import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import CodeInput from '../../../components/Helper/CodeInput';
import styles from './styles';
import userAuthStyles from '../authStyles';
import { LoadingOutlined } from '@ant-design/icons';
import { Alert } from 'antd';
import CompleteProfilePic from '/public/img/complete-profile.png';
import { authActionCreators } from '../../../redux/actions';
import { EmailVerify, ResendEmailVerificationCode } from '../../../services/auth';

const EmailVerification = (props) => {
  const authStyle = userAuthStyles();
  const classes = styles();
  const selector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showLoaderSubmit, setShowLoaderSubmit] = useState(false);
  const [showLoaderBack, setShowLoaderBack] = useState(false);

  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [verificationCode, setVerificationCode] = useState({
    value: '000000',
    completed: false
  });

  const [refreshCodeTimer, setRefreshCodeTimer] = useState(null);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    if (startTimer) {
      let time = 60;
      const interval = setInterval(() => {
        if (time > 0) {
          time--;
          setRefreshCodeTimer(time);
        } else {
          setStartTimer(false);
          clearInterval(this);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [startTimer]);

  async function ResendCode() {
    if (!startTimer) {
      try {
        setShowLoaderBack(true);
        if (!startTimer) {
          setRefreshCodeTimer(60);
          setStartTimer(true);
          var params = { email: selector.user.data.email };
          await ResendEmailVerificationCode(params);
          setSuccessMessage(`An email send it to ${params.email}.`);
        }
      } catch (error) {
        setError(error);
      } finally {
        setShowLoaderBack(false);
      }
    }
  }

  async function SubmitEmail() {
    if (verificationCode.completed) {
      try {
        setShowLoaderSubmit(true);
        const params = {
          code: verificationCode.value
        };
        const result = await EmailVerify(params);
        if (result) dispatch(authActionCreators.verifyEmail(result));
        navigate('/');
      } catch (error) {
        if (error.message == 'The verification does not match with the one we sent you') setError(error.message);
        else setError('Something went wrong. Please try again in a few minutes');
      } finally {
        setShowLoaderSubmit(false);
      }
    }
  }

  return (
    <div className={classes.centerElements}>
      <h2 className={classes.title}>Email confirmation</h2>
      <p className={classes.subtitle}>You need confirm your email address in order to use all functions of the site.</p>
      <img src={CompleteProfilePic} className={classes.completeProfileImg} alt="logo" />
      <CodeInput setVerificationCode={setVerificationCode} />
      {error && <Alert className={`${authStyle.alertError} ${classes.message}`} message={error} type="error" />}
      {successMessage && (
        <Alert className={`${authStyle.successMessage} ${classes.message}`} message={successMessage} type="success" />
      )}
      {startTimer && (
        <p className={classes.resendCodeMessage}>
          You can resend the code in: <b>{refreshCodeTimer} seconds</b> <LoadingOutlined />
        </p>
      )}
      <div className={classes.doubleBtn}>
        <button
          name="button"
          onClick={ResendCode}
          className={
            startTimer
              ? `${authStyle.secondBtnDisable} ${classes.secondBtn}`
              : `${authStyle.secondBtn} ${classes.secondBtn}`
          }
        >
          {showLoaderBack ? <LoadingOutlined /> : <span>Send code again</span>}
        </button>
        <button
          type="submit"
          onClick={SubmitEmail}
          className={
            verificationCode.completed
              ? `${authStyle.submitBtn} ${classes.submitBtn}`
              : `${authStyle.submitBtnDisable} ${classes.submitBtn}`
          }
        >
          {showLoaderSubmit ? <LoadingOutlined /> : <span>Confirm your email</span>}
        </button>
      </div>
    </div>
  );
};

export default EmailVerification;
