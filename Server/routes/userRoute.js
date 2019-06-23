import { Router } from 'express';
import Auth from '../middlewares/auth';
import userController from '../controllers/userController'

const router = Router();

router.post('/auth/signup', Auth.trimmer, Auth.signup, userController.signup);
router.post('/auth/signin', Auth.trimmer, Auth.signin, userController.signin);

export default router;
