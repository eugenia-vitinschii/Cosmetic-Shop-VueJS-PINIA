//adminRoutes

import { Router} from "express";
import { authMiddleware} from "../middleware/authMiddleware";
import { adminMiddleware } from "../middleware/adminMiddleware";
import { adminInfo } from "../controllers/adminController";

const router = Router();

router.get(
   '/',
   authMiddleware,
   adminMiddleware,
   adminInfo,

)

export default router;