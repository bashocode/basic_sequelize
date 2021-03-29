class ImageController {
  async uploadImage(req, res, next) {
    res.status(200).json({
      message: 'file uploaded',
      path: req.file.path
    });
  }
}

module.exports = ImageController;
