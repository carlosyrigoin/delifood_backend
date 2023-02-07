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
exports.updateUser = exports.showUser = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = Object.assign({}, req.body);
        const userExist = yield user_1.default.findOne({ email: userData.email });
        if (userExist)
            throw new Error('Email already exists');
        const user = new user_1.default(userData);
        yield user.save();
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.createUser = createUser;
const showUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = yield user_1.default.findById(id);
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.showUser = showUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { email, password, name, phone, address } = req.body;
        const user = yield user_1.default.updateOne({ _id: id }, { $set: { email, password, name, phone, address } });
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.updateUser = updateUser;
