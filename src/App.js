import React from 'react'
import { createBrowserHistory } from 'history'
import { Switch, Route, HashRouter } from 'react-router-dom'
import Main from './views/main/main.view'
import About from './views/about/about.viw'

const history = createBrowserHistory()

export default function App () {
  return (
    <HashRouter history={history}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/about' component={About} />
      </Switch>
    </HashRouter>
  )
}
