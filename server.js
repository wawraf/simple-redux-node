// server.js
const express = require('express');
const app = express();

import constants from './server/config/constants';
import './server/config/database';
import middlewares from './server/config/middlewares';

// page rendering
app.use(express.static('public'));
app.get("/", function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// middlewares
middlewares(app)

// listen for requests :)
const server = app.listen(process.env.PORT, (err) => {
  if (err) throw err
  console.log(
    `Your app is listening on port: ${constants.PORT}
    --------------------
    Running in ${process.env.NODE_ENV} environment`
  );
});

// stop server is required to stop it for the test time
function stop() {
  server.close();
}

module.exports = server
module.exports.stop