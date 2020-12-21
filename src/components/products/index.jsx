import React, { useContext,useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';




const useStyle = makeStyles(()=>({
  root: {
    display: 'flex',
   
  },
  mainCard: {
    margin: '10px',
    minHeight: '25.5rem',
  },
  avatar: {
    backgroundColor: red[400],
  },
  media: {
    paddingTop: '56.25%',
    backgroundSize: 'contain',
  },
  icon: {
    paddingBottom: '0',
  },
  cart: {
    marginLeft: 'calc(100% - 100px)',
  },
  link: {
    textDecoration: 'none',
  },
}))


function Products() {
  const classes = useStyle();
  const [products, setProducts] = useState([]);
//Call API
  const getItem = async () => {
    await axios({
      method: 'get',
      url: 'https://fakestoreapi.com/products',
    })
    .then(res => {
      console.log(res)
      setProducts(res.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

//Update Render Status
  useEffect(() => {
    getItem();
  }, []);
  
  
  return (
    <Container className={classes.root} maxWidth="xl">
      <Grid container xs={12}>
        {products.map((product)=>(
        <Grid item xs={12} sm={4} md={3} key={product.id}>
            <Card className={classes.mainCard}>
            <CardHeader
              title="Shrimp and Chorizo Paella"
              subtitle="September 14, 2016"
              avatar={
                <Avatar aria-aria-label="recipe" className={classes.avatar}>H</Avatar>
              }
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
            />
            <Link className={classes.link}>
              <CardMedia 
                className={classes.media}
                image={product.image}
              />
            
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" align="center" minHeight="100px">
                  {product.title}
                </Typography>
              </CardContent>
            </Link>
            
            <CardActions disableSpacing className={classes.icon}>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="add to cart" className={classes.cart}>
                <ShoppingBasketIcon color="inherit" />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Products
