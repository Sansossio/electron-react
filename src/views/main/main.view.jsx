import React, { Component } from 'react'
import logo from './logo.svg'
import './main.css'
import { Ipc } from '../../ipc/ipc'

const { syncEvents, asyncEvents } = Ipc.getEvents()

export default class Main extends Component {
  constructor () {
    super()
    this.state = {
      asyncValue: 'null'
    }
  }

  componentDidMount () {
    this.loadAsyncValue()
  }

  async loadAsyncValue () {
    for (let i = 1; i <= 100; i++) {
      const asyncValue = await Ipc.sendAsync(asyncEvents.TEST_ASYNC_EVENT, i)
      this.setState({ asyncValue })
    }
  }

  openAboutWindow (e) {
    e.preventDefault()
    const window = 'about'
    Ipc.asyncEvent(asyncEvents.OPEN_WINDOW, window)
  }

  render () {
    const version = Ipc.send(syncEvents.GET_VERSION)
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
          <b>Async value:</b> {this.state.asyncValue}
        </p>
        <p>
          <a onClick={e => this.openAboutWindow(e)} href='about'>Open about</a>
        </p>
      </div>
    )
  }
}
