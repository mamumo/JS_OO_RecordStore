var RecordStore = require('../record_store');
var assert = require('chai').assert

describe('Record Store', function() {

  it('should have a name', function(){
    recordStore1 = new RecordStore("Tommys Tunes", "Glasgow")
    assert.equal("Tommys Tunes", recordStore1.name)
  })

  it('should have a city', function(){
    recordStore1 = new RecordStore("Tommys Tunes", "Glasgow")
    assert.equal("Glasgow", recordStore1.city)
  })

  it('should have 0 records in inventory to start', function(){
    recordStore1 = new RecordStore("Tommys Tunes", "Glasgow")
    assert.equal( 0, recordStore1.inventory.length)
  })
})