// all routes index.ts

import { Router} from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
import adminUserRoutes from "./admin.user.routes";
import productRoutes from "./product.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/users", userRoutes);
router.use("/admin/users", adminUserRoutes);
router.use("/products", productRoutes)


export default router;