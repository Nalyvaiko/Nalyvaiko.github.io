define(
  // name
  'Model',
  // dependencies
  [],
  // describe module
  function () {

    return {
      data: {},
      addList: function(list) {
        this.data = list;
      },
      addItem: function(item) {
        if (item.length === 0) return;
        this.data.listArr.push(item);

        return this.data;
      },
      removeItem: function(item) {
        var index = this.data.listArr.indexOf(item);

        if (index === -1) return;
        this.data.listArr.splice(index, 1);

        return this.data;
      },
      updateItem: function(id, item) {
        if (item.length === 0) return;

        this.data.listArr[id] = item;
      }
    };
  }
);
