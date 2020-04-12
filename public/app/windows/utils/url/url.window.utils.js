module.exports = function (url, path) {
  if (!url) {
    url = ''
  }
  if (!path) {
    path = ''
  }
  return `${url}#/${path}`
}
