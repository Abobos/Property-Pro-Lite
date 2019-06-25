import { Router } from 'express';
import upload from '../config/multer';
import trimmer from '../middlewares/trimmer';
import Auth from '../middlewares/propertyAuth';
import cloudinary from '../middlewares/imageUploader';
import PropertyController from '../controllers/propertyController';

const router = Router();

router.post('/property', upload.array('image', 10), trimmer, Auth.postProperty, cloudinary.imageUploader, PropertyController.postPropertyAdvert);

export default router;

