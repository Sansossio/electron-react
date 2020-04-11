const { ipcMain, app } = require('electron')
const syncEvents = require('../enum/ipc/sync_events')

ipcMain.on(syncEvents.GET_VERSION, event => {
  event.returnValue = app.getVersion()
})

ipcMain.on(syncEvents.GET_EVENTS, event => {
  event.returnValue = syncEvents
})
