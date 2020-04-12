const { BrowserWindow } = require('electron')
const config = require('./about.window.config.json')
const isDev = require('electron-is-dev')
const pathConfig = require('../utils/path/path.window.utils')
const urlConfig = require('../utils/url/url.window.utils')

module.exports = function () {
  const mainWindow = new BrowserWindow(config.window)
  const path = 'about'
  const url = isDev ? pathConfig.url : pathConfig.path
  mainWindow.loadURL(urlConfig(url, path))
  mainWindow.setMenu(null)
  mainWindow.setResizable(false)
  mainWindow.setMaximizable(false)
  return mainWindow
}
