import React from 'react'
import { Switch, Route, HashRouter } from 'react-router-dom'
import Main from './views/main/main.view'
import About from './views/about/about.view'

export default function App () {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/about' component={About} />
      </Switch>
    </HashRouter>
  )
}
