const { globalShortcut, dialog } = require('electron')
const data = require('./forbidden.config.json')

module.exports = function () {
  for (const forbiddenKey of data) {
    globalShortcut.register(forbiddenKey, () => {
      dialog.showErrorBox('Forbidden key', `Key "${forbiddenKey}" is forbidden`)
    })
  }
}
