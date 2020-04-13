const { ipcRenderer } = window.require('electron')

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

  static sendAsync (event, argument = '') {
    return new Promise((resolve) => {
      Ipc.listen(event, (_, data) => {
        resolve(data)
        Ipc.removeAllListener(event)
      })
      ipcRenderer.send(event, argument)
    })
  }
}
