import { Schema, model } from "mongoose";

const orderSchema = new Schema({
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

const Order = model("Order", orderSchema);
export default Order;