const appEvents = require('./app/app.events')
const windowEvents = require('./window/window.events')
const testEvents = require('./test/test_async.events')

module.exports = function () {
  appEvents()
  windowEvents()
  testEvents()
}
