import React from 'react';
import Card from '@material-ui/core/Card';
import { Avatar, CardContent, CardHeader, CardMedia, Chip, Container, Grid, makeStyles, Typography } from '@material-ui/core';
import avatar_Thong from '../../assets/banner_3.jpeg';
import FaceIcon from '@material-ui/icons/Face';

const useStyle = makeStyles(()=>({
  alignItemsAndJustifyContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  header: {
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
}))

export default () => {
  const classes = useStyle();
  return (
    <div>
      <Container maxWidth="md">
        <Grid container xs={12} spacing={10}>
          <Grid item xs={6}>
            <Card>
              <div className={classes.header}>
                <div>
                <Avatar src={avatar_Thong} className={classes.avatar} size="small" />

                </div>
              </div>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card>
              <Chip 
                avatar={
                  <Avatar src={avatar_Thong}/>
                }
                size="medium"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  This impressive paella is a perfect party dish and a fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
              </CardContent>
              <div className={classes.alignItemsAndJustifyContent}>
                4. useStyles 
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

