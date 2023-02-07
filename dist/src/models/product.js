"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    },
    description: {
        type: String,
    },
    picture_url: {
        type: String,
    }
});
const Product = (0, mongoose_1.model)("Product", productSchema);
exports.default = Product;
