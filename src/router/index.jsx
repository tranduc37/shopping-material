import React from 'react'
import { Switch, Route } from 'react-router-dom';
import home from '../components/home'
import products from '../components/products/index';
import about from '../components/products';
import services from '../components/services/index';
import detailProduct from '../components/products/detailProduct';


export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={home} />
      <Route path="/products" component={products} />
      <Route path="/about" component={about} />
      <Route path="/services" component={services} />
      <Route path="/products/:id" component={detailProduct} />
    </Switch>
  )
}
