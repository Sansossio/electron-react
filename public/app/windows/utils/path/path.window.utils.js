const path = require('path')
const productionPath = path.join(
  __dirname,
  '..',
  '..',
  '..',
  '..',
  '..',
  'build',
  'index.html'
)

module.exports = {
  url: 'http://localhost:3000',
  path: `file://${productionPath}`
}
