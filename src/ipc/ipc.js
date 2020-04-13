const { ipcRenderer } = window.require('electron')

export class Ipc {
  static getEvents () {
    return ipcRenderer.sendSync('GET_EVENTS')
  }

  static send (event, argument) {
    return ipcRenderer.sendSync(event, argument)
  }

  static sendAsync (event, argument = '') {
    return new Promise((resolve) => {
      ipcRenderer.on(event, (_, data) => {
        resolve(data)
        ipcRenderer.removeAllListeners(event)
      })
      ipcRenderer.send(event, argument)
    })
  }
}
