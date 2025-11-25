//adminRoutes

import { Router} from "express";
import { adminInfo } from "../controllers/adminController";
import { authMiddleware} from "../middleware/authMiddleware";
import { adminMiddleware } from "../middleware/adminMiddleware";

const router = Router();

router.get(
   '/',
   authMiddleware,
   adminInfo,
   adminMiddleware
)

export default router;