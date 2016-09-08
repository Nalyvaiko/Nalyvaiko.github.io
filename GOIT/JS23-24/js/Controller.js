define(
  // name
  'Controller',
  // dependencies
  ['Model', 'View', 'jquery'],
  // describe module
  function (model, view, $) {

    return {
      addListeners: function(view) {
        view.elements.input.on('keypress', this.addItem);
        view.elements.listContainer.on('click', '.item-delete', this.removeItem);
        view.elements.listContainer.on('click', '.item-complete', this.completeItem);
        view.elements.listContainer.on('change', '.item', this.updateItem);
      },
      completeItem: function() {
        var item = $(this);

        view.completeItem(item);
      },
      updateItem: function() {
        var item = $(this).val();
        var id =  $(this).attr('id');

        model.updateItem(id, item);
        view.renderList(model.data);
      },
      addItem: function() {
        if (event.which === 13) {
          var newItem = view.elements.input.val();

          model.addItem(newItem);
          view.renderList(model.data);
          view.elements.input.val('');
        }
      },
      removeItem: function() {
        var item = $(this).attr('data-value');

        model.removeItem(item);
        view.renderList(model.data);
      }
    };
  }
);
