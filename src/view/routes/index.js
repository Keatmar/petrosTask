import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AuthRoutes from './auth';
import MainRoutes from './main';

const Routes = () => {
  return (
    <Fragment>
      <MainRoutes />
    </Fragment>
  );
};

export default Routes;
