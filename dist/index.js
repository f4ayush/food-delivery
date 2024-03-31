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
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const dataSource_1 = require("./dataSource");
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/", routes_1.default);
app.use("/", (req, res) => {
    res.send("hi");
});
dataSource_1.AppDataSource.initialize().then(() => __awaiter(void 0, void 0, void 0, function* () {
    app.listen(PORT, () => {
        console.log('Server is listening on port 3000');
    });
})).catch(error => console.log(error));
//# sourceMappingURL=index.js.map