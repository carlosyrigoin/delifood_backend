"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sessionControllers_1 = require("../controllers/sessionControllers");
const sessionRouter = (0, express_1.Router)();
sessionRouter.post('/login', sessionControllers_1.login);
sessionRouter.delete('/logout', sessionControllers_1.logout);
exports.default = sessionRouter;
