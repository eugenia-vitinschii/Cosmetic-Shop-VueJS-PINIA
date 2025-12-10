//adminRoutes

import { Router} from "express";
import { authMiddleware} from "../middleware/auth.middleware";
import { adminMiddleware } from "../middleware/admin.middleware";
import { adminUserControlller } from "../controllers/admin.user.controller";
import { validateresource } from "../middleware/validateResource";
import { adminUpdateUserDTO } from "../dtos/admin-update-user.dto";

const router = Router();

/* == Used for all routes === */
router.use(authMiddleware);
router.use(adminMiddleware);

/* === GET ALL USERS === */
router.get('/', adminUserControlller.getAll);

/* === GET USER BY ID === */
router.get("/:id", adminUserControlller.getById);

/* === UPDATE ANY USER (and role) === */
router.put("/:id", validateresource(adminUpdateUserDTO), adminUserControlller.update)

/* === DELETE USER === */
router.delete("/:id", adminUserControlller.delete)

export default router;