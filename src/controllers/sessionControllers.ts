import type { Request, Response } from "express";
import User from "../models/user";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

let user;

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        user = await User.findOne({ email: req.body.email })
        if(!user) throw new Error("Email not found")

        if(!await bcrypt.compare(req.body.password, user.password)) throw new Error("Wrong password")

        const token = jwt.sign({
            email: user.email, id: user._id,
        }, process.env.TOKEN_SECRET || "", { expiresIn: '1d' })

        res.status(200).json({email: user.email, id: user._id, token})
    } catch (error) {
        res.status(500).json(error);
    }
}

export const logout = async (req: Request, res: Response): Promise<void> => {
    res.status(200).json("Logged out");
}