class ImageController {
  async uploadImage(req, res, next) {
    // if upload.array then should be req.files
    // else if upload.single then only req.file
    res.status(200).json({
      message: 'file uploaded',
      file: req.file
    });
  }

  async uploadImages(req, res, next) {
    // if upload.array then should be req.files
    // else if upload.single then only req.file
    res.status(200).json({
      message: 'file uploaded',
      files: req.files
    });
  }
}

module.exports = ImageController;
