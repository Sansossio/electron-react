const { app, BrowserWindow } = require('electron')
const config = require('./main_windows.config.json')
const isDev = require('electron-is-dev')
const path = require('path')

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
  const mainWindow = new BrowserWindow(config.window)
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${productionPath}`
  )
  mainWindow.setMenu(null)
  mainWindow.webContents.openDevTools()
  mainWindow.setResizable(false)
  mainWindow.setMaximizable(false)
  mainWindow.on('closed', () => {
    app.exit()
  })
}
