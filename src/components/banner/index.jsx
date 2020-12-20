import React from 'react';
import image_1 from '../../assets/banner_3.jpeg';
import image_2 from '../../assets/banner_3.jpeg';
import image_3 from '../../assets/banner_3.jpeg';
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
        auto={true}
        loop
        margin={10}
        center
        navSpeed
      >
        <div className={classes.banner__iamge}>
          <img src={image_1} className={classes.img} alt="banner_1"/>
        </div>
        <div className={classes.banner__iamge}>
          <img src={image_2} alt="banner_1"/>
        </div>
        <div className={classes.banner__iamge}>
          <img src={image_3} alt="banner_1"/>
        </div>
      </OwlCarousel>
    </div>
  )
}
