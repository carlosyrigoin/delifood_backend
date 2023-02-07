"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    delivery_address: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    },
    total: {
        type: Number,
    },
    state: {
        type: Boolean,
        default: true
    },
    items: [
        {
            product_id: {
                type: String,
            },
            order_id: {
                type: String
            },
            quantity: {
                type: Number
            },
            description: {
                type: String
            },
            price: {
                type: Number
            }
        }
    ]
});
const Order = (0, mongoose_1.model)("Order", orderSchema);
exports.default = Order;
