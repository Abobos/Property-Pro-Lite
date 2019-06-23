import { Router } from 'express';
import Auth from '../middlewares/auth';
import userController from '../controllers/userController'

const router = Router();

router.post('/auth/signup', Auth.trimmer, Auth.signup, userController.signup);

export default router;
