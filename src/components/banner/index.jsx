import React from 'react';
import image_1 from '../../assets/banner_1.jpeg';
import image_2 from '../../assets/banner_2.jpeg';
import image_3 from '../../assets/banner_4.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import OwlCarousel from 'react-owl-carousel';
import { Button, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyle = makeStyles(()=>({
  main: {
    margin: '1px 0',
  },
  banner: {
    width: '100%',
    margin: '0 auto',
  },
  banner__iamge: {
    marginTop: '1rem',
  },
  img: {
    maxWidth: '100%',
    maxHeight: '30rem',
    objectFit: 'cover',
    position: 'relative',

  },
  linkClick: {
    position: 'absolute',
    height: '2rem',
    width: '10rem',
    top: 'calc(100%/2)',
    left: 'calc(100%/2)',
    zIndex: 999999,
    listStyleType: 'none',
    borderRadius: '3px',
    underline: 'none',
  }
}))
export default () => {

  const classes =useStyle();
  return (
    <div className={classes.main}>
      <OwlCarousel
        className={`owl-theme ${classes.banner}`}
        items="1"
        dots
        nav
        autoplay= {true}
        loop
        margin={10}
        center
        navSpeed
      >
        <div className={classes.banner__iamge}>
          <img src={image_1} className={classes.img} alt="banner_1"/>
        </div>
        <div className={classes.banner__iamge}>
          <img src={image_2} className={classes.img} alt="banner_1"/>
        </div>
        <div className={classes.banner__iamge}>
          <img src={image_3} className={classes.img} alt="banner_1"/>
        </div>
      </OwlCarousel>
      <div>
        {/* <Link href="/"  color="default" className={classes.linkClick} variant="raised">
          LEARN MORE
        </Link> */}
        {/* <Typography variant="h4" align="center" color="secondary" href="/" className={classes.linkClick}>
          LEARN MORE
        </Typography> */}
      </div>
    </div>
  )
}
