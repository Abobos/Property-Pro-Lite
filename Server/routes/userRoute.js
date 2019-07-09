import { Router } from 'express';
import trimmer from '../middlewares/trimmer';
import Auth from '../middlewares/userAuth';
import UserController from '../controllers/userController';

const router = Router();

router.post('/auth/signup', trimmer, Auth.signup, UserController.signup);
router.post('/auth/signin', trimmer, Auth.signin, UserController.signin);
router.post('/auth/:user_email/reset_password', trimmer, Auth.resetPassword, UserController.resetPassword);

export default router;
