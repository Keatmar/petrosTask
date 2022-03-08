import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import MainBar from '../../../components/NavigationBar/mainBar';

const Home = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (window.location.pathname == '/completeProfile') {
      navigate('/');
    }
  }, []);
  return (
    <div className={classes.root}>
      <MainBar />
    </div>
  );
};

export default Home;
