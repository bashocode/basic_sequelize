// use const because later we dont want this variable changes
const express = require('express');
// invoke the express variable so we can start the project
const app = express();
// define the port
const port = 3000;

// import router and use that route
const characterRoutes = require('./routes/character');
// this will be define the route of the app
app.use('/', characterRoutes);

// express will run with port that we use
app.listen(port, () => {
  console.log('listening on port', port);
});
