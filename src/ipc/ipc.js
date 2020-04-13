const { ipcRenderer } = window.require('electron-better-ipc')

export class Ipc {
  static getEvents () {
    return ipcRenderer.sendSync('GET_EVENTS')
  }

  static listen (event, callback) {
    ipcRenderer.on(event, callback)
  }

  static removeAllListener (event) {
    ipcRenderer.removeAllListeners(event)
  }

  static send (event, argument) {
    return ipcRenderer.sendSync(event, argument)
  }

  static sendAsync (event, argument) {
    ipcRenderer.send(event, argument)
  }

  static sendAndWait (event, argument) {
    return ipcRenderer.callMain(event, argument)
  }
}
