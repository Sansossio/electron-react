const { ipcMain } = require('electron')
const asyncEvents = require('../enum/async_events')

module.exports = function () {
  ipcMain.on(asyncEvents.TEST_ASYNC_EVENT, (event, argument) => {
    setTimeout(() => {
      event.reply(asyncEvents.TEST_ASYNC_EVENT, argument)
    }, 5)
  })
}
