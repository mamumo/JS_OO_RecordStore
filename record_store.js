var _ = require('lodash');
var Record = require('./record');


var RecordStore = function(name, city, cashInBank) {
  this.name = name,
  this.city = city,
  this.cashInBank = cashInBank
  this.inventory = []
}

RecordStore.prototype = {
  addRecord: function(record) {
    this.inventory.push(record);
  },

  listsInventory: function() {
    var inventoryList = this.inventory.map(function(record) {
      return inventoryList});
  },

  soldRecord: function(record) {
    var recordSold = this.inventory.shift(function(record){
      return recordSold});
    },

  updatedInventoryAmount: function(record) {
    this.cashInBank +=record.price;
    }

  }
  

module.exports = RecordStore;