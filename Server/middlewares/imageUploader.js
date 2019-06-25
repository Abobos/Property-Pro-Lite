import cloudinary from '../config/cloudinary';
import sendErrorResponse from '../helpers/sendResponse';

export default class Cloudinary {
  static async imageUploader(req, res, next) {
    try {
      const response = await cloudinary.v2.uploader.upload(req.files[0].path);
      console.log(response);
      req.body.image_url = response.secure_url;
      return next();
    } catch (err) {
      // err.message = 'Something went wrong';
      return sendErrorResponse(res, 500, err);
    }
  }
}
