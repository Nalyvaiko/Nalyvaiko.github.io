define(
  // name
  'Model',
  // dependencies
  [],
  // describe module
  function () {

    return {
      data: {},
      loadList: function() {
        var listData;
        var toDoList = localStorage.getItem('toDoList');

        if (toDoList) {
          listData = JSON.parse(toDoList);
        } else {
          listData = {listArr: ['learn javascript', 'buy new robbe', 'make coffee']};
        }

        var serialList = JSON.stringify(listData);
        localStorage.setItem('toDoList', serialList);

        this.data = listData;
      },
      addItem: function(item) {
        if (item.length === 0) return;
        this.data.listArr.push(item);

        localStorage.setItem('toDoList', JSON.stringify(this.data));

        return this.data;
      },
      removeItem: function(item) {
        var index = this.data.listArr.indexOf(item);

        if (index === -1) return;
        this.data.listArr.splice(index, 1);

        localStorage.setItem('toDoList', JSON.stringify(this.data));

        return this.data;
      },
      updateItem: function(id, item) {
        if (item.length === 0) return;

        localStorage.setItem('toDoList', JSON.stringify(this.data));

        this.data.listArr[id] = item;
      }
    };
  }
);
