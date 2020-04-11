import React, { Component } from 'react'
import logo from './logo.svg'
import './main.css'

const { ipcRenderer } = window.require('electron')

const { syncEvents, asyncEvents } = ipcRenderer.sendSync('GET_EVENTS')

export default class Main extends Component {
  openAboutWindow (e) {
    e.preventDefault()
    const window = 'about'
    ipcRenderer.send(asyncEvents.OPEN_WINDOW, window)
  }

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
        <p>
          <a onClick={e => this.openAboutWindow(e)} href='about'>Open about</a>
        </p>
      </div>
    )
  }
}
