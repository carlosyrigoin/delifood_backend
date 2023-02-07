"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getAllProducts = void 0;
const product_1 = __importDefault(require("../models/product"));
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield product_1.default.find();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getAllProducts = getAllProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield product_1.default.findById(id);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.getProductById = getProductById;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = new product_1.default(req.body);
        yield product.save();
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createProduct = createProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { name, price, category, description, picture_url } = req.body;
        const product = yield product_1.default.updateOne({ _id: id }, { $set: { name, price, category, description, picture_url } });
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield product_1.default.remove({ _id: id });
        res.status(201).json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.deleteProduct = deleteProduct;
