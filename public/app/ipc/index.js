const appEvents = require('./app/app.events')
const windowEvents = require('./window/window.events')

module.exports = function () {
  appEvents()
  windowEvents()
}
