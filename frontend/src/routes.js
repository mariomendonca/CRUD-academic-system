import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import List from './pages/List'
import Delete from './pages/Delete'

export default function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/create" component={Create}/>
            <Route path="/update" component={Update}/>
            <Route path="/list" component={List}/>
            <Route path="/delete" component={Delete}/>
        </Switch>
    </BrowserRouter>
    )
}