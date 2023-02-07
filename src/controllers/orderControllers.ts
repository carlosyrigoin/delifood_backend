import type { Request, Response } from "express";
import Order from "../models/order";

export const getOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await Order.find({user_id: id});

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const order = new Order(req.body);
        await order.save();

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json(error);
    }
}