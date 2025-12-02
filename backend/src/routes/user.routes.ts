//user.routes.ts

//imports
import { Router} from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { getMyProfile, updateMyProfile } from '../controllers/user.controller';


const router = Router();

router.get("/profile", authMiddleware, getMyProfile)
router.patch("/profile", authMiddleware, updateMyProfile)

export default router;