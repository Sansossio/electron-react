const { BrowserWindow } = require('electron')
const config = require('./about.window.config.json')
const isDev = require('electron-is-dev')
const pathConfig = require('../utils/path/path.window.utils')
const urlConfig = require('../utils/url/url.window.utils')

let window = null

module.exports = function () {
  if (window !== null) {
    window.show()
    return
  }
  window = new BrowserWindow(config.window)
  const path = 'about'
  const url = isDev ? pathConfig.url : pathConfig.path
  window.loadURL(urlConfig(url, path))
  window.setMenu(null)
  window.setResizable(false)
  window.setMaximizable(false)
  window.on('close', () => {
    window = null
  })
  return window
}
