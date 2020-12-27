import React, { useState, useContext } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreIcon from '@material-ui/icons/MoreVert';
import ShoppingBasketSharpIcon from '@material-ui/icons/ShoppingBasketSharp';
import Fade from '@material-ui/core/Fade';
import Divider from '@material-ui/core/Divider';
import { Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import StorefrontIcon from '@material-ui/icons/Storefront';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext.jsx';



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  color: {
    backgroundColor: '#ff6633c7',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  linkhome: {
    textDecoration: 'none !important',
    color: 'white',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  textlink: {
    textDecoration: 'none',

  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  Drawer: {
    width: '250px',
    height: '100%',
    textAlign: "center",
    paddingTop: '30px',
  },
  linkDrawer: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = useState(false);

  const [state, ] = useContext(AuthContext);
  const {user} = state;
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handelDrawer = () => {
    setOpen(true)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      TransitionComponent={Fade}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <p>Favorite</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <ShoppingBasketSharpIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
      <div className={classes.grow}>
        <AppBar position="static" className={classes.color}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
            >
              <MenuIcon  onClick={handelDrawer} />
            </IconButton>
              <Link to="/" className={classes.linkhome} color="primary">
                <Typography className={classes.title} variant="h6" noWrap >
                    REACTJS SHOP
                </Typography>
              </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <FavoriteIcon />
                </Badge>
              </IconButton>
              <IconButton aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <ShoppingBasketSharpIcon />
                </Badge>
              </IconButton>
              {
                user && user.avatar ? <Avatar alt="nguyentranduc" src={user.avatar} /> :
                  <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                  href="/register"
                  >
                    <AccountCircle />
                  </IconButton>
              }
    
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={open}
          onClose={()=> setOpen(false)}
        >
          <div className={classes.Drawer}>
            <h4>Alexander Nguyen</h4>
              <List>
                <Link to="/" className={classes.linkDrawer}>
                  <ListItem button onClick={()=> setOpen(false)}>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                  </ListItem>
                </Link>
                <Link to="/products" className={classes.linkDrawer}>
                  <ListItem button onClick={()=> setOpen(false)}>
                    <ListItemIcon>
                      <StorefrontIcon />
                    </ListItemIcon>
                    <ListItemText>Product</ListItemText>
                  </ListItem>
                </Link>
                <Link to="/products" className={classes.linkDrawer}>
                  <ListItem button onClick={()=> setOpen(false)}>
                    <ListItemIcon>
                      <FaceIcon />
                    </ListItemIcon>
                    <ListItemText>About</ListItemText>
                  </ListItem>
                </Link>
                <Link to="/login" className={classes.linkDrawer}>
                  <ListItem button onClick={()=> setOpen(false)}>
                    <ListItemIcon>
                      <LockOpenIcon />
                    </ListItemIcon>
                    <ListItemText>Login</ListItemText>
                  </ListItem>
                </Link>
                <Link to="/register" className={classes.linkDrawer}>
                  <ListItem button onClick={()=> setOpen(false)}>
                    <ListItemIcon>
                      <VpnKeyIcon />
                    </ListItemIcon>
                    <ListItemText>Register</ListItemText>
                  </ListItem>
                </Link>
              </List>
          <Divider />
          </div>
        </Drawer>
        {renderMobileMenu}
        
      </div>
  );
}
