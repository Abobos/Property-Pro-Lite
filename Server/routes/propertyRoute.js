import { Router } from 'express';
import upload from '../config/multer';
import { verifyToken } from '../middlewares/tokenHandler';
import Auth from '../middlewares/propertyAuth';
import cloudinary from '../middlewares/imageUploader';
import PropertyController from '../controllers/propertyController';

const router = Router();

router.post('/property',
  verifyToken,
  upload.array('image', 10),
  Auth.postProperty,
  cloudinary.imageUploader,
  PropertyController.postPropertyAdvert);
router.patch('/property/:propertyId', verifyToken, Auth.propertyId, Auth.updateProperty, PropertyController.updatePropertyAdvert);
router.patch('/property/:propertyId/sold', verifyToken, Auth.propertyId, PropertyController.markPropertyAdvert);
router.delete('/property/:propertyId', verifyToken, Auth.propertyId, PropertyController.deletePropertyAdvert);
router.get('/property', verifyToken, Auth.getProperties, PropertyController.getPropertiesAdvert);
router.get('/property/:propertyId', verifyToken, Auth.propertyId, PropertyController.getSpecificPropertyDetails);

export default router;
