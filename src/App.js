import React from 'react'
import { createBrowserHistory } from 'history'
import { Switch, Route, Router } from 'react-router-dom'
import Main from './views/main/main'
import About from './views/about/about'

const history = createBrowserHistory()

export default function App () {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/about' component={About} />
      </Switch>
    </Router>
  )
}
