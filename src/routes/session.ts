import { Router } from "express";
import { login, logout } from "../controllers/sessionControllers";

const sessionRouter = Router();

sessionRouter.post('/login', login)
sessionRouter.delete('/logout', logout)

export default sessionRouter;