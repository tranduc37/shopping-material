import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Logo from '../../assets/logomango.png';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(()=>({
  logo: {
    width: '10%',
  },
  images: {
    height: '100%',
    width: '100%',
    marginLeft: '2rem',
  }
}))

export default () => {
  const classes = useStyle();

  return (
    <React.Fragment>
      <div className={classes.logo}>
        <img src={Logo} alt="logo-mangoads" className={classes.images}/>
      </div>
    </React.Fragment>
  )
}
