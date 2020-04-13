const { ipcMain } = require('electron-better-ipc')
const asyncEvents = require('../enum/async_events')

module.exports = function () {
  ipcMain.answerRenderer(asyncEvents.TEST_ASYNC_EVENT, (argument) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(argument)
      }, 100)
    })
  })
}
