"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app.js"));
const port = process.env.PORT || 3005;
app_1.default.listen(port, () => {
    console.log(`Servidor Iniciado en http://localhost:${port}`);
});
