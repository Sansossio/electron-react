const { app, BrowserWindow } = require('electron')
const config = require('./main.window.config.json')
const isDev = require('electron-is-dev')
const pathConfig = require('../utils/path/path.window.utils')
const urlConfig = require('../utils/url/url.window.utils')

let mainWindow

module.exports = function () {
  if (mainWindow) {
    return mainWindow
  }
  mainWindow = new BrowserWindow(config.window)
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
