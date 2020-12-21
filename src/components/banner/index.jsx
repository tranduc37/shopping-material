import React from 'react';
import image_1 from '../../assets/banner_1.jpeg';
import image_2 from '../../assets/banner_2.jpeg';
import image_3 from '../../assets/banner_4.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import OwlCarousel from 'react-owl-carousel';

const useStyle = makeStyles(()=>({
  main: {
    position: 'relative',
  },
  banner: {
    width: '100%',
    margin: '0 auto',
  },
  banner__iamge: {
    marginTop: '1rem',
  },
  img: {
    position: 'relative',
    maxWidth: '100%',
    maxHeight: '30rem',
    objectFit: 'cover',
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
    </div>
  )
}
