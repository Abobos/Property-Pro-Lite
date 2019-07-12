import { Router } from 'express';
import FlagController from '../controllers/flagController';
import FlagAuth from '../middlewares/flagAuth';
import { verifyToken } from '../middlewares/tokenHandler';

const router = Router();

router.post('/flag',
  verifyToken,
  FlagAuth.validateFlagDetails,
  FlagController.flagPropertyAdvert);

export default router;
