var _ = require('lodash')

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
  }

}
  

module.exports = RecordStore;