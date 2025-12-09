//product routes ts

import { Router } from "express";
import {productController} from "../controllers/product.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { adminMiddleware } from "../middleware/admin.middleware";
import { validateresource } from "../middleware/validateResource";
import { ProductSchema } from "../dtos/product.dto";

const router = Router();

/* === PUBLIC ROUTES === */
router.get("/", productController.getAll);
router.get("/:id", productController.getById);

/* === ADMIN ONLY ROUTES === */
router.post("/", authMiddleware, adminMiddleware, validateresource(ProductSchema), productController.create );

router.put('/:id',authMiddleware, adminMiddleware, validateresource(ProductSchema), productController.update);

router.delete("/:id", authMiddleware, adminMiddleware, productController.delete);

export default router;