import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const { ipcRenderer } = window.require('electron')

const syncEvents = ipcRenderer.sendSync('GET_EVENTS')

class App extends Component {
  render () {
    const version = ipcRenderer.sendSync(syncEvents.GET_VERSION)
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>React + Electron = <span role='img' aria-label='love'>😍</span></h2>
        </div>
        <p className='App-intro'>
          <b> Release 0.2.8 </b>
          Version: {version}
        </p>
      </div>
    )
  }
}

export default App
