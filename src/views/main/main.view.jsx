import React, { Component } from 'react'
import logo from './logo.svg'
import './main.css'
import { Ipc } from '../../ipc/ipc'

const { syncEvents, asyncEvents } = Ipc.getEvents()

export default class Main extends Component {
  constructor () {
    super()
    this.state = {
      asyncValue: 'null',
      asyncValueMulti: 'null'
    }
  }

  componentDidMount () {
    this.loadAsyncValueMulti()
    this.loadAsyncValue()
  }

  async loadAsyncValue () {
    const array = []
    for (let i = 1; i <= 100; i++) {
      array.push(i)
      const asyncValue = await Ipc.sendAndWait(asyncEvents.TEST_ASYNC_EVENT, i)
      this.setState({ asyncValue })
    }
  }

  async loadAsyncValueMulti () {
    const array = []
    for (let i = 1; i <= 500; i++) {
      const value = parseInt(Math.random() * i + i, 10)
      array.push(value)
    }
    console.log(`last value: ${array[array.length - 1]}`)
    Promise.all(array.map(async i => {
      const asyncValueMulti = await Ipc.sendAndWait(asyncEvents.TEST_ASYNC_EVENT, i)
      this.setState({ asyncValueMulti })
    }))
  }

  openAboutWindow (e) {
    e.preventDefault()
    const window = 'about'
    Ipc.send(asyncEvents.OPEN_WINDOW, window)
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
          <b>Async values:</b> {this.state.asyncValue}
        </p>
        <p>
          <b>Async values multi:</b> {this.state.asyncValueMulti}
        </p>
        <p>
          <a onClick={e => this.openAboutWindow(e)} href='about'>Open about</a>
        </p>
      </div>
    )
  }
}
