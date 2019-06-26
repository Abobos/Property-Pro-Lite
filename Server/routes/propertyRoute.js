import { Router } from 'express';
import upload from '../config/multer';
import trimmer from '../middlewares/trimmer';
import Auth from '../middlewares/propertyAuth';
import cloudinary from '../middlewares/imageUploader';
import PropertyController from '../controllers/propertyController';

const router = Router();

router.post('/property', upload.array('image', 10), trimmer, Auth.postProperty, cloudinary.imageUploader, PropertyController.postPropertyAdvert);
router.patch('/property/:propertyId', Auth.propertyId, Auth.updateProperty, PropertyController.updatePropertyAdvert);
router.patch('/property/:propertyId/sold', Auth.propertyId, PropertyController.markPropertyAdvert);
router.delete('/property/:propertyId', Auth.propertyId, PropertyController.deletePropertyAdvert);
router.get('/property', Auth.getProperties, PropertyController.getPropertiesAdvert);
router.get('/property/:propertyId', Auth.propertyId, PropertyController.getSpecificPropertyDetails);
export default router;

