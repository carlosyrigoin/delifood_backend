import type { Request, Response } from "express";
import Product from "../models/product";


export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await Product.find();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await Product.findById(id);

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = new Product(req.body);
        await product.save();

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const { name, price, category, description, picture_url } = req.body;
        const product = await Product.updateOne({ _id: id }, { $set: {name, price, category, description, picture_url} });

        res.status(201).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const data = await Product.remove({ _id: id });

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}