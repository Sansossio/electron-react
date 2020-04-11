const { ipcMain, app } = require('electron')
const syncEvents = require('../enum/sync_events')
const asyncEvents = require('../enum/async_events')

module.exports = function () {
  ipcMain.on(syncEvents.GET_VERSION, event => {
    event.returnValue = app.getVersion()
  })

  ipcMain.on(syncEvents.GET_EVENTS, event => {
    event.returnValue = {
      syncEvents,
      asyncEvents
    }
  })
}
