import { Grid, makeStyles } from '@material-ui/core';
import React from 'react'
import Logo from '../logo';
import Nav from '../nav';
import Products from '../products';
import Banner from '../banner';
import Cateroly from '../cateroly';
import About from '../about';

export default () => {

  return (
    <React.Fragment>
        <Nav />
        <Banner />
        <Cateroly />
        <Products />
        {/* <About /> */}
        {/* <Nav /> */}
    </React.Fragment>
  )
}