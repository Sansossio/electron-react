const { globalShortcut, dialog } = require('electron')
const data = require('./forbidden.config.json')

module.exports = function () {
  for (const forbiddenKey of data) {
    globalShortcut.register(forbiddenKey, () => {
      const title = 'Forbidden key'
      const message = `Key "${forbiddenKey}" is forbidden`
      dialog.showErrorBox(title, message)
    })
  }
}
