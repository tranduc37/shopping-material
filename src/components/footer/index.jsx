import React from 'react';
import { Container, Link, makeStyles, Typography } from '@material-ui/core';
import  Grid  from '@material-ui/core/Grid';
import  Paper  from '@material-ui/core/Paper';


const useStyles = makeStyles(()=>({
  root: {
    backgroundColor: '#f5f5f5',
  },
  main: {
    flexGrow: 1,
    textAlign: 'center',
  },
  item: {
    textAlign: 'center',
  },
}))

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="md" className={classes.main}>
        <Grid container xs={12}>
          <Grid item xs={4}>
            <Typography variant="inherit" className={classes.item}>
              <Link href="https://tranduc37.github.io/shopping-material/">
                col-4
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="inherit">
              <Link>
                col-4
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="inherit">
              <Link>
                col-4
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
