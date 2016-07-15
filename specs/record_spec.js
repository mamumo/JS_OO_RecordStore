var Record = require('../record');
var assert = require('chai').assert

describe('Record', function() {

  it('should have an artist', function(){
    record1 = new Record("Michael Jackson", "Billie Jean", 5)
    assert.equal("Michael Jackson", record1.artist)
  })

  it('should have a title', function(){
    record1 = new Record("Michael Jackson", "Billie Jean", 5)
    assert.equal("Billie Jean", record1.title)
  })

  it('should have a price', function(){
    record1 = new Record("Michael Jackson", "Billie Jean", 5)
    assert.equal(5, record1.price)
  })
})