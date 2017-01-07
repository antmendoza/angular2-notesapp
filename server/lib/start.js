var server = require('./server');
var port= 3030;
server.listen(port, function () {
  console.log('Server listening on port: '+port);
});
