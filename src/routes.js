import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import NotFound from './components/NotFound/NotFound'
import AddPost from './components/AddPost/AddPost'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/addpost' component={AddPost} />
      <Route path='*' component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Routes