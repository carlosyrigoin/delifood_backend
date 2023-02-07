"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderControllers_1 = require("../controllers/orderControllers");
const orderRouter = (0, express_1.Router)();
orderRouter.get('/orders/:id', orderControllers_1.getOrders);
orderRouter.post('/orders', orderControllers_1.createOrder);
exports.default = orderRouter;
