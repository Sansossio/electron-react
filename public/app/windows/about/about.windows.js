const { BrowserWindow } = require('electron')
const config = require('./about.windows.config.json')
const isDev = require('electron-is-dev')
const pathConfig = require('../utils/path.windows.utils')

module.exports = function () {
  const mainWindow = new BrowserWindow(config.window)
  mainWindow.loadURL(
    isDev
      ? `${pathConfig.url}/about`
      : `${pathConfig.path}#/about`
  )
  mainWindow.setMenu(null)
  mainWindow.setResizable(false)
  mainWindow.setMaximizable(false)
  return mainWindow
}
