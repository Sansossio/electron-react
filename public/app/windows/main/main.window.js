const { app, BrowserWindow } = require('electron')
const config = require('./main.window.config.json')
const isDev = require('electron-is-dev')
const pathConfig = require('../utils/path.window.utils')
const urlConfig = require('../utils/url.window.utils')

module.exports = function () {
  const mainWindow = new BrowserWindow(config.window)
  const path = ''
  const url = isDev ? pathConfig.url : pathConfig.path
  mainWindow.loadURL(urlConfig(url, path))
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
