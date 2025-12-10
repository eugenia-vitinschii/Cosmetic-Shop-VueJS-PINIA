//user.routes.ts

//imports
import { Router} from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { userController } from '../controllers/user.controller';
import { validateresource } from '../middleware/validateResource';
import { updateUserDTO } from '../dtos/update-user.dto';


const router = Router();

/* === GET MY PROFILE === */
router.get("/profile", authMiddleware, userController.getMe)


/* === UPDATE MY PROFILE === */
router.put("/profile", 
   authMiddleware, 
   validateresource(updateUserDTO),
   userController.updateMe
)

export default router;