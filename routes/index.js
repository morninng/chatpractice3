var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  /*
  var data = {
    title: 'Hello, world!',
    id: 'abc123',
    links: [{
      name: 'Google',
      url: 'http://google.com/'
    }, {
      name: 'Facebook',
      url: 'http://facebook.com/'
    }, {
      name: 'Twitter',
      url: 'http://twitter.com/'
    }],
    upperHelper: function(string) {
      return string.toUpperCase();
    }
  };
  res.render('index', data);
*/
  res.sendFile(__dirname + '/index.html');  

});




module.exports = router;
