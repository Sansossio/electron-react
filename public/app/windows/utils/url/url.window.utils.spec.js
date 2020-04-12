const service = require('./url.window.utils')

describe('Url window utils', () => {
  it('should return right url', () => {
    const url = 'a'
    const path = 'b'
    expect(service(url, path)).toEqual('a#/b')
  })

  it('should replace url for empty with is undefined', () => {
    const url = undefined
    const path = 'b'
    expect(service(url, path)).toEqual('#/b')
  })

  it('should replace path for empty with is undefined', () => {
    const url = 'a'
    const path = undefined
    expect(service(url, path)).toEqual('a#/')
  })
})
