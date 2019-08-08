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
})
