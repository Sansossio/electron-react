const { BrowserWindow } = require('electron')
const config = require('./main_windows.config.json')
const isDev = require('electron-is-dev')
const path = require('path')

let mainWindow

module.exports = function () {
  const productionPath = path.join(
    __dirname,
    '..',
    '..',
    '..',
    '..',
    'build',
    'index.html'
  )
  mainWindow = new BrowserWindow(config.window)
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${productionPath}`
  )
  mainWindow.setMenu(null)
  mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => (mainWindow = null))
}
