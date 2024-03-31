"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const organization_1 = __importDefault(require("./organization"));
const item_1 = __importDefault(require("./item"));
const pricing_1 = __importDefault(require("./pricing"));
const router = express_1.default.Router();
router.use('/organizations', organization_1.default);
router.use('/items', item_1.default);
router.use('/pricing', pricing_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map