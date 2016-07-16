var Customer = require('../customer');
var Record = require('../record');
var RecordStore = require('../record_store.js');
var assert = require('chai').assert

describe('Customer', function() {

  it('should have a name', function() {
    var customer1 = new Customer("Jim")
    assert.equal("Jim", customer1.name)

  }),

  it('should be able to buy record', function() {
    var customer1 = new Customer("Jim");
    var record1 = new Record("Michael Jackson", "Billie Jean", 5);
    customer1.buyRecord(record1);
    assert.equal(1, customer1.collection.length)
  })

  it('should have more than 1 record in collection', function() {
    var customer1 = new Customer("Jim");
    var record1 = new Record("Michael Jackson", "Billie Jean", 5);
    var record2 = new Record("Westlife", "Coast to Coast", 5);
    var record3 = new Record("Spice Girls", "Wannabe", 5);
    customer1.buyRecord(record1);
    customer1.buyRecord(record2);
    customer1.buyRecord(record3);
    assert.equal(3, customer1.collection.length)
  })

  it('should be able to sell records', function(){
    var customer1 = new Customer("Jim");
    var record1 = new Record("Michael Jackson", "Billie Jean", 5);
    var record2 = new Record("Westlife", "Coast to Coast", 5);
    var record3 = new Record("Spice Girls", "Wannabe", 5);
    customer1.buyRecord(record1);
    customer1.buyRecord(record2);
    customer1.buyRecord(record3);
    customer1.sellRecord(record2);
    assert.equal(2, customer1.collection.length)

  })
})

