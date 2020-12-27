import React, { useContext,useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Breadcrumbs, Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import axios from 'axios';




const useStyle = makeStyles(()=>({
  root: {
    display: 'flex',
   
  },
  cateroly: {
    margin: '1rem',
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

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

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
    <div>
      <div className={classes.cateroly}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Shopping
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Products
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
    </div>
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
    </div>
  )
}

export default Products
