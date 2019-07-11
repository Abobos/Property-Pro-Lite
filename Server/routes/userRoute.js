import { Router } from 'express';
import MagicValidator from '../middlewares/magicValidator';
import Auth from '../middlewares/userAuth';
import UserController from '../controllers/userController';

const router = Router();

router.post('/auth/signup', MagicValidator.trimmer, MagicValidator.transformEmail, Auth.signup, UserController.signup);
router.post('/auth/signin', MagicValidator.trimmer, MagicValidator.transformEmail, Auth.signin, UserController.signin);
router.post('/auth/:user_email/reset_password', 
  MagicValidator.trimmer, 
  MagicValidator.transformEmail, 
  Auth.resetPassword, 
  UserController.resetPassword);

export default router;
