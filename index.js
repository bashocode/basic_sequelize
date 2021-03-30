// use const because later we dont want this variable changes
const express = require('express');
// invoke the express variable so we can start the project
const app = express();
// define the port
const port = 3000;

// use bodyparser to get req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// import router and use that route
const characterRoutes = require('./routes/character');
const imageRoutes = require('./routes/image');
// this will be define the route of the app
app.use('/', characterRoutes);
app.use('/image', imageRoutes);

// express will run with port that we use
app.listen(port, () => {
  console.log('listening on port', port);
});
