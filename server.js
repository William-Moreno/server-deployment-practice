'use strict';

const {response} = require('express');
const express = require('express');
const app = express();

//contains all server route definitions

//define get endpoints
app.get('/', (request, response, next) => {
  response.send(`hello`);

});

app.get('/foo', (request, response, next) => {
  let responseObject = {
    number: 10,
    string: 'hello world'
  }

  response.json(responseObject);

});

//opens express application to conversations
function start(port) {
  app.listen(port, () => console.log(`App is listening on port ${port}`));
}

module.exports = {
  app: app,
  start: start,
};