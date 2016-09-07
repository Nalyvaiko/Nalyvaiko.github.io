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
      addBtn: $('.item-add'),
      listContainer: $('.item-list')
    };

    self.renderList(model.data);
  }

  self.renderList = function(data) {
    var $list = $('#list-template').html();
    var $tmpl = _.template($list);
    self.elements.listContainer.html($tmpl(data));
  }

  init();
}

// -------------------------------------- Controller ---------------------------------------
function Controller(model, view) {
  var self = this;

  view.elements.addBtn.on('click', addItem);
  view.elements.listContainer.on('click', '.item-delete', removeItem);

  function addItem() {
    var newItem = view.elements.input.val();

    model.addItem(newItem);
    view.renderList(model.data);
    view.elements.input.val('');
  }

  function removeItem() {
    var item = $(this).attr('data-value');

    model.removeItem(item);
    view.renderList(model.data);
  }
}

// Init
$(function() {
  // var firstToDoList = ['learn javascript', 'learn react', 'make coffee'];
  var firstToDoList = {listArr: ['learn javascript', 'learn react', 'make coffee']};
  var model = new Model(firstToDoList);
  var view = new View(model);
  var controller = new Controller(model, view);
});
