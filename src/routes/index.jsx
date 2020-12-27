import React, { useEffect, useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import home from '../pages/home';
import products from '../pages/products';
import login from '../pages/login';
import register from '../pages/register';
import { AuthContext } from '../contexts/authContext';


export default () => {
  const [state, userDispatch ] = useContext(AuthContext);


  const getUser = async ()  => {
    const user = await localStorage.getItem('user');
    userDispatch({type: 'LOG_IN_SUCESS', payload: JSON.parse(user)});
    console.log('user', user)
    return user;
  }
  const checkAuthentication = false;

  
  useEffect(() => {
    getUser();
  }, [])


  return (
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/products" component={products} />
      <Route path="/login" component={login} />
      <Route path="/register" component={register} />
    </Switch>
  )
}
