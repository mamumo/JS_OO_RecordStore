var RecordStore = require('../record_store');
var Record = require('../record');
var assert = require('chai').assert

describe('Record Store', function() {

  it('should have a name', function(){
    var recordStore1 = new RecordStore("Tommys Tunes", "Glasgow", 100)
    assert.equal("Tommys Tunes", recordStore1.name)
  })

  it('should have a city', function(){
    var recordStore1 = new RecordStore("Tommys Tunes", "Glasgow")
    assert.equal("Glasgow", recordStore1.city)
  })

  it('should have 0 records in inventory to start', function(){
    var recordStore1 = new RecordStore("Tommys Tunes", "Glasgow")
    assert.equal( 0, recordStore1.inventory.length)
  })

  it('should have opening balance', function(){
    var recordStore1 = new RecordStore("Tommys Tunes", "Glasgow", 100)
    assert.equal( 100, recordStore1.cashInBank)
  })

  it('should be able to add records to store', function(){
    var recordStore1 = new RecordStore("Tommys Tunes", "Glasgow");
    var record1 = new Record("Michael Jackson", "Billie Jean", 5);
    var record2 = new Record("Abba", "Knowing Me Knowing You", 10);
    var record3 = new Record("Tom Jones", "Delilah", 6);
    var record4 = new Record("Now 64", "Various", 20);
    recordStore1.addRecord(record1);
    recordStore1.addRecord(record2);
    recordStore1.addRecord(record3);
    recordStore1.addRecord(record4);
    assert.equal( 4, recordStore1.inventory.length)
  })

  it('should be able to list inventory', function(){
    var recordStore1 = new RecordStore("Tommys Tunes", "Glasgow", 100);
    var record1 = new Record("Michael Jackson", "Billie Jean", 5);
    var record2 = new Record("Abba", "Knowing Me Knowing You", 10);
    var record3 = new Record("Tom Jones", "Delilah", 6);
    var record4 = new Record("Now 64", "Various", 20);
    recordStore1.addRecord(record1);
    recordStore1.addRecord(record2);
    recordStore1.addRecord(record3);
    recordStore1.addRecord(record4);
    recordStore1.listInventory;
    assert.deepEqual( [record1, record2, record3, record4], recordStore1.inventory)
  })

  it('should be able to sell a record', function(){
    var recordStore1 = new RecordStore("Tommys Tunes", "Glasgow", 100);
    var record1 = new Record("Michael Jackson", "Billie Jean", 5);
    var record2 = new Record("Abba", "Knowing Me Knowing You", 10);
    var record3 = new Record("Tom Jones", "Delilah", 6);
    var record4 = new Record("Now 64", "Various", 20);
    recordStore1.addRecord(record1);
    recordStore1.addRecord(record2);
    recordStore1.addRecord(record3);
    recordStore1.addRecord(record4);
    recordStore1.soldRecord(record2);
    assert.equal(3, recordStore1.inventory.length)
  })

  it('should add to cash in bank when record sold', function() {
    var recordStore1 = new RecordStore("Tommys Tunes", "Glasgow", 100);
    var record1 = new Record("Michael Jackson", "Billie Jean", 5);
    var record2 = new Record("Abba", "Knowing Me Knowing You", 10);
    var record3 = new Record("Tom Jones", "Delilah", 6);
    var record4 = new Record("Now 64", "Various", 20);
    recordStore1.addRecord(record1);
    recordStore1.addRecord(record2);
    recordStore1.addRecord(record3);
    recordStore1.addRecord(record4);
    recordStore1.soldRecord(record2);
    recordStore1.updatedInventoryAmount(record2);
    assert.equal(110, recordStore1.cashInBank)
  })

  it('should give total value of the store (cash + inventory)', function() {
    var recordStore1 = new RecordStore("Tommys Tunes", "Glasgow", 100);
    var record1 = new Record("Michael Jackson", "Billie Jean", 5);
    var record2 = new Record("Abba", "Knowing Me Knowing You", 10);
    var record3 = new Record("Tom Jones", "Delilah", 6);
    var record4 = new Record("Now 64", "Various", 20);
    recordStore1.addRecord(record1);
    recordStore1.addRecord(record2);
    recordStore1.addRecord(record3);
    recordStore1.addRecord(record4);
    recordStore1.totalValueOfInventory();
    assert.equal(141, recordStore1.totalValueOfInventory())

  })


})