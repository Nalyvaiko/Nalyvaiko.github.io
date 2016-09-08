// MVC
// -------------------------------------- Model ---------------------------------------
function Model(data) {
  var self = this;

  self.data = data;

  self.addItem = function(item) {
    if (item.length === 0) return;
    self.data.listArr.push(item);

    return self.data;
  };

  self.removeItem = function(item) {
    var index = self.data.listArr.indexOf(item);

    if (index === -1) return;
    self.data.listArr.splice(index, 1);

    return self.data;
  };

  self.updateItem = function(id, item) {
    if (item.length === 0) return;

    self.data.listArr[id] = item;
  };
}

// -------------------------------------- View ---------------------------------------
function View(model) {
  var self = this;

  function init() {
    var $body = $('body');
    var $wrapper = $('#wrapper-template').html();

    // Render
    var $tmpl = _.template($wrapper);
    // Append Result
    $body.append($tmpl());

    self.elements = {
      input: $('.item-value'),
      listContainer: $('.item-list')
    };

    self.renderList(model.data);
  };

  self.completeItem = function(item) {
    item.siblings('input').toggleClass('completed');
  };

  self.renderList = function(data) {
    var $list = $('#list-template').html();
    var $tmpl = _.template($list);
    self.elements.listContainer.html($tmpl(data));
  };

  init();
}

// -------------------------------------- Controller ---------------------------------------
function Controller(model, view) {
  var self = this;

  view.elements.input.on('keypress', addItem);
  view.elements.listContainer.on('click', '.item-delete', removeItem);
  view.elements.listContainer.on('click', '.item-complete', completeItem);
  view.elements.listContainer.on('change', '.item', updateItem);

  function completeItem() {
    var item = $(this);

    view.completeItem(item);
  }

  function updateItem() {
    var item = $(this).val();
    var id =  $(this).attr('id');

    model.updateItem(id, item);
    view.renderList(model.data);
  }

  function addItem(event) {
    if (event.which === 13) {
      var newItem = view.elements.input.val();

      model.addItem(newItem);
      view.renderList(model.data);
      view.elements.input.val('');
    }
  }

  function removeItem() {
    var item = $(this).attr('data-value');

    model.removeItem(item);
    view.renderList(model.data);
  }
}

// Init
$(function() {
  var firstToDoList = {listArr: ['learn javascript', 'buy new robbe', 'make coffee']};
  var model = new Model(firstToDoList);
  var view = new View(model);
  var controller = new Controller(model, view);
});
