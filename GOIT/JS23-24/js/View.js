define(
  // name
  'View',
  // dependencies
  ['Model', 'jquery', 'lodash'],
  // describe module
  function (model, $) {

    return {

      init: function() {
        var $body = $('body');
        var $wrapper = $('#wrapper-template').html();
        // Render
        var $tmpl = _.template($wrapper);
        // Append Result
        $body.append($tmpl());

        this.elements = {
          input: $('.item-value'),
          listContainer: $('.item-list')
        };

        this.renderList(model.data);
      },

      completeItem: function(item) {
        item.siblings('input').toggleClass('completed');
      },

      renderList: function(data) {
        var $list = $('#list-template').html();
        var $tmpl = _.template($list);
        this.elements.listContainer.html($tmpl(data));
      }
    };
  }
);
