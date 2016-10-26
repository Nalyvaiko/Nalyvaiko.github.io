var express = require('express');

// Create app
var app = express();

// which folder to serve
app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Express server is up on port 3000');
})
