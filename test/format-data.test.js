import assert from 'assert'
import formatData from '../src/utils/format-data'

describe('format data', function() {
  const dataPacket = {
    key1: 'Hello',
    key2: 'Goodbye',
  }
  it('should convert object to string', async function() {
    const formattedData = await formatData(dataPacket)
    assert.strictEqual(typeof formattedData, 'string')
  })
  it('should format the object', async function() {
    const formattedData = await formatData(dataPacket)
    assert.strictEqual(formattedData, 'key1: Hello\nkey2: Goodbye\n')
  })
  it('should return an empty string when passed an empty object', async function() {
    const formattedData = await formatData({})
    assert.strictEqual(formattedData, '')
  })
  it('should throw an error when passed an empty string', async function() {
    assert.throws(await formatData(''),/^Error: Must be an object$/)
  })
  it('should throw an error when passed an non-empty string', async function() {
    assert.throws(await formatData('123'),{name: /Error/i})
  })
  it('should throw an error when passed null', async function() {
    assert.throws(await formatData(null),{name: /^TypeError$/})
  })
})
