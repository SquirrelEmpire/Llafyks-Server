var server = require('./moduleCore.js');
server.emitter.on('test', function () {
  console.log('Fos');
});
