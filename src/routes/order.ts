import { Router } from "express";
import { createOrder, getOrders } from "../controllers/orderControllers";

const orderRouter = Router();

orderRouter.get('/orders/:id', getOrders)
orderRouter.post('/orders', createOrder)

export default orderRouter;