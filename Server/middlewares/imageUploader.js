import cloudinary from '../config/cloudinary';
import sendErrorResponse from '../helpers/sendResponse';

export default class Cloudinary {
  static async imageUploader(req, res, next) {
    try {
      const response = await cloudinary.v2.uploader.upload(req.files[0].path);
      req.body.image_url = response.secure_url;
      return next();
    } catch (err) {
      return sendErrorResponse(res, 500, 'Something went wrong');
    }
  }
}
