const data = require('./path.window.utils')

describe('Path window utils', () => {
  describe('Url', () => {
    it('should be defined', () => {
      expect(data).toHaveProperty('url')
    })
  })

  describe('Path', () => {
    it('should be defined', () => {
      expect(data).toHaveProperty('path')
    })

    it('should start with file://', () => {
      expect(data.path.startsWith('file://')).toEqual(true)
    })
  })
})
