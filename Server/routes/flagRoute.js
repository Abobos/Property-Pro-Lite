import { Router } from 'express';
import FlagController from '../controllers/flagController';
import MagicValidator from '../middlewares/magicValidator';
import FlagAuth from '../middlewares/flagAuth';
import { verifyToken } from '../middlewares/tokenHandler';


const router = Router();

router.post('/flag',
  verifyToken,
  MagicValidator.trimmer,
  FlagAuth.validateFlagDetails,
  FlagController.flagPropertyAdvert);

export default router;
