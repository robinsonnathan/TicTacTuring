import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Template from '../containers/Template'

const createRoutes = () => {
  return (
    <Route component={Template} path='/'>

    </Route>
  )
}

const Routes = createRoutes();

export default Routes