requirejs.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min'
  }
});

require(
  [
    'Model',
    'View',
    'Controller'
  ],

  function (Model, View, Controller) {
    Model.loadList();
    View.init();
    Controller.addListeners(View);
  }
);
