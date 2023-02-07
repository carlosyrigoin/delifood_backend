import type { Request, Response } from "express";
import User from "../models/user";

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userData = {...req.body}
        const userExist = await User.findOne({email: userData.email})
        if (userExist) throw new Error('Email already exists')

        const user = new User(userData)
        await user.save();

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const showUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const data = await User.findById(id);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const { email, password, name, phone, address } = req.body;
        const user = await User.updateOne({ _id: id }, { $set: {email, password, name, phone, address} });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).json(error);
    }
}