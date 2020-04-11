const { app, BrowserWindow } = require('electron')
const config = require('./main.windows.config.json')
const isDev = require('electron-is-dev')
const pathConfig = require('../utils/path.windows.utils')

module.exports = function () {
  const mainWindow = new BrowserWindow(config.window)
  mainWindow.loadURL(
    isDev
      ? pathConfig.url
      : pathConfig.path
  )
  if (isDev) {
    mainWindow.webContents.openDevTools()
  }
  mainWindow.setMenu(null)
  mainWindow.setResizable(false)
  mainWindow.setMaximizable(false)
  mainWindow.on('closed', () => {
    app.exit()
  })
  return mainWindow
}
