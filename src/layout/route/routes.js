import React, {
  lazy
} from 'react';
  
const Login = lazy(() => import('../../features/login'));
const Register = lazy(() => import('../../features/register'));
const Main = lazy(() => import('../../features/landing'));
const Marketplace = lazy(()=> import('../../features/marketplace'));
const Store = lazy(()=> import('../../features/store'));
const Product = lazy(()=> import('../../features/product'));
const Cart = lazy(()=> import('../../features/cart'));
const Address = lazy(()=> import('../../features/address'));
const Checkout = lazy(()=> import('../../features/checkout'));
const BuyHistory = lazy(()=> import('../../features/history'));

  const routes = {
    login: {
      path: '/login',
      exact: '/login',
      name: 'Login',
      component: Login
    },
    register : {
      path: '/register',
      exact: '/register',
      name: 'Register',
      component: Register
    },
    main: {
      path: '/',
      exact: '/',
      name: 'Main',
      component: Main
    },
    marketplace: {
      path: '/marketplace',
      exact: '/marketplace',
      name: 'Marketplace',
      component: Marketplace
    },
    store: {
      path: '/store/:id',
      exact: '/store/:id',
      name: 'Store',
      component: Store
    },
    product: {
      path: '/p/:id',
      exact: '/p/:id',
      name: 'Product',
      component: Product
    },
    cart:{
      path: '/cart',
      exact: '/cart',
      name: 'Cart',
      component: Cart
    },
    address:{
      path: '/address',
      exact: '/address',
      name: 'Address',
      component: Address
    },
    checkout:{
      path: '/checkout',
      exact: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    history:{
      path: '/history',
      exact: '/history',
      name: 'history',
      component: BuyHistory
    }
  };
  
  
  const guest ={
    routes:[
      routes.login,
      routes.register,
      routes.main,
      routes.marketplace,
      routes.store,
      routes.product,
      routes.cart,
      routes.address,
      routes.checkout,
      // routes.history
    ],
    redirect:{
      ...routes.login
    }
  } ;
  
  const member = {
    routes:[
      routes.main,
      routes.marketplace,
      routes.store,
      routes.product,
      routes.cart,
      routes.address,
      routes.checkout,
      routes.history
    ],
    redirect:{
      ...routes.main 
    }
  } 
  
  
  export default {
    guest,
    member
  };