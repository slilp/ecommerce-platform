import React, {
  lazy
} from 'react';
  
const Login = lazy(() => import('../../features/login'));
const Register = lazy(() => import('../../features/register'));
const Main = lazy(() => import('../../features/landing'));
  
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
    }
  };
  
  
  const guest ={
    routes:[
      routes.login,
      routes.register,
      routes.main
    ],
    redirect:{
      ...routes.login
    }
  } ;
  
  // const member = {
  //   routes:[
  //     routes.dashboard,
  //     routes.main
  //   ],
  //   redirect:{
  //     ...routes.dashboard 
  //   }
  // } 
  
  
  export default {
    guest
    // member
  };