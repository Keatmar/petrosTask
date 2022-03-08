import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styles from './styles';
import userAuthStyles from '../authStyles';
import { SignOut } from '../../../services/auth';
import EmailVerification from './emailVerification';

const CompleteProfile = () => {
  const authStyle = userAuthStyles();
  const classes = styles();

  const navigate = useNavigate();
  const selector = useSelector((state) => state.auth);
  useEffect(() => {
    if (!selector.user) navigate('/login');
    if (selector.user.data.emailVerified) navigate('/home');
  }, []);

  function handleBack() {
    navigate('/login');
    SignOut();
  }

  return (
    <div className={authStyle.root}>
      <button type="button" className={classes.btnBack} name="button" onClick={handleBack}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0)">
            <path
              d="M24 10.8001H4.56L11.28 4.08009L9.6 2.40009L-3.8147e-06 12.0001L9.6 21.6001L11.28 19.9201L4.56 13.2001H24V10.8001Z"
              fill="#686E7C"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <label>Back</label>
      </button>
      <section className={`${authStyle.block} ${classes.block}`}>
        <EmailVerification />
      </section>
    </div>
  );
};

export default CompleteProfile;
