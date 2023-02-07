"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = exports.productRoutes = exports.sessionRoutes = exports.userRoutes = void 0;
var user_1 = require("./user");
Object.defineProperty(exports, "userRoutes", { enumerable: true, get: function () { return __importDefault(user_1).default; } });
var session_1 = require("./session");
Object.defineProperty(exports, "sessionRoutes", { enumerable: true, get: function () { return __importDefault(session_1).default; } });
var product_1 = require("./product");
Object.defineProperty(exports, "productRoutes", { enumerable: true, get: function () { return __importDefault(product_1).default; } });
var order_1 = require("./order");
Object.defineProperty(exports, "orderRoutes", { enumerable: true, get: function () { return __importDefault(order_1).default; } });
