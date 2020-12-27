import { Avatar, Button, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import avatar from '../../assets/banner_3.jpeg';

const useStyle = makeStyles(theme =>({
  root: {
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '3px',
    backgroundColor: '#5f9ea0',
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}))

const Header = () => {
  return(
    <Grid container justify="flex-end">
      <Grid xs={1}>
        <ClearIcon />
      </Grid>
    </Grid>
  )
}

const Photo = () => {
  return(
    <Grid xs={12} >
      <Avatar src={avatar}/>
    </Grid>
  )
}
const Name = () => {
  return(
    <div>
      <Typography variant="h6">
        Dinh Ngoc Thong
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        manager at net.company
      </Typography>

    </div>
  )
}
const Follow = () => {
  return(
    <Button disableElevation color="primary" variant="contained" size="small">
      Follow
    </Button>
  )
}

export default () => {
  const classes = useStyle();

  return (
    <Container maxWidth="md" gutterBottom={true} spacing={10}>
      <Grid container xs ={12} spacing={5}>
        <Grid container xs={6} direction="column" alignItems="center" className={classes.root}>
          <Header />
          <Photo />
          <Name />
          <Follow />
        </Grid>
        <Grid container xs={6} direction="column" alignItems="center" className={classes.root}>
          <Header />
          <Photo />
          <Name />
          <Follow />
        </Grid>
      </Grid>
    </Container>
  )
};


