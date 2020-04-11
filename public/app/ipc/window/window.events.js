const { ipcMain, dialog } = require('electron')
const asyncEvents = require('../enum/async_events')
const windows = require('../../windows')

module.exports = function () {
  ipcMain.on(asyncEvents.OPEN_WINDOW, (_, arg) => {
    const window = windows[arg]
    if (!window) {
      const title = 'Window not found'
      const content = `window ${arg} does not exists`
      dialog.showErrorBox(title, content)
      return
    }
    window()
  })
}
