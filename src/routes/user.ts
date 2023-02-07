import { Router } from "express";
import { validateToken } from "../middlewares/validateToken";
import { createUser, showUser, updateUser } from "../controllers/userControllers";

const userRouter = Router();

userRouter.post('/users', createUser)
userRouter.get('/profile/:id', validateToken, showUser)
userRouter.put('/profile/:id', validateToken, updateUser)

export default userRouter;