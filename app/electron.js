const { app } = require('electron')
const isDev = require('electron-is-dev')
const initWindows = require('./windows')
const initIpc = require('./ipc')
const initEvents = require('./events')

if (isDev) {
  // Remove eletron security warnings
  process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'
}

app.on('ready', () => {
  initWindows()
  initIpc()
  initEvents()
})
