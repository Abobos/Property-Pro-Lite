import { Router } from 'express';
import MagicValidator from '../middlewares/magicValidator';
import Auth from '../middlewares/userAuth';
import UserController from '../controllers/userController';

const router = Router();

router.post('/auth/signup', Auth.signup, MagicValidator.transformEmail, UserController.signup);
router.post('/auth/signin', Auth.signin, MagicValidator.transformEmail, UserController.signin);
router.post('/auth/:user_email/reset_password', 
  MagicValidator.trimmer,
  Auth.resetPassword,
  MagicValidator.transformEmail, 
  UserController.resetPassword);

export default router;
