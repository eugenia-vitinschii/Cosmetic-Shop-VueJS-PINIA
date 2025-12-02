//adminRoutes

import { Router} from "express";
import { authMiddleware} from "../middleware/auth.middleware";
import { adminMiddleware } from "../middleware/admin.middleware";
import { deleteUser, getAllUsers, updateUserAsAdmin } from "../controllers/admin.controller";


const router = Router();

router.get('/', authMiddleware, adminMiddleware, getAllUsers);
router.patch("/:id", authMiddleware,adminMiddleware, updateUserAsAdmin);
router.delete("/:id", authMiddleware, adminMiddleware, deleteUser)

export default router;