const express = require('express');
const routes = express();
// import multer
const multer = require('multer');
// use multer
let upload = multer({ dest: 'uploads/' });

// we have a controller that we want to use, so we import this
const ImageController = require('../controllers/image');
// because this is class, so dont forget to call first
const imageController = new ImageController();

// register route / which is home, and use the controller function
routes.post('/upload', upload.single('image'), imageController.uploadImage);
routes.post('/upload-multi', upload.array('images', 10), imageController.uploadImages);

module.exports = routes;
