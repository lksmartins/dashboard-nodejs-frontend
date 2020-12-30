import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Order from './pages/Order'

function Router(){
    return (

        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/orders" exact component={Order} />
        </Switch>

    )
}

export default Router