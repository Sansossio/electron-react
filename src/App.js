import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const { remote } = window.require('electron')

class App extends Component {
  handlePrint () {
    console.log(remote.getCurrentWindow())
  }

  render () {
    this.handlePrint()
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React + Electron = <span role='img' aria-label='love'>😍</span></h2>
        </div>
        <p className='App-intro'>
          <b> Release 0.2.8 </b>
          Version: {remote.app.getVersion()}
        </p>
      </div>
    )
  }
}

export default App
