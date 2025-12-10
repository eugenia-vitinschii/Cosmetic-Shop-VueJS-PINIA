//routes/authRoutes.ts

//imports
import { Router} from 'express';
import {login, register } from "../controllers/auth.controller";
import { validateresource } from '../middleware/validateResource';
import { createUserDTO } from '../dtos/create-user.dto';

const router = Router();

/* === REGISTER === */
router.post("/register", validateresource(createUserDTO), register);

/* === LOGIN === */
router.post("/login", login);


export default router;