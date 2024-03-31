"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/itemRoutes.ts
const express_1 = __importDefault(require("express"));
const Item_1 = require("../controllers/Item");
const router = express_1.default.Router();
const itemController = new Item_1.ItemController();
router.get('/', itemController.getAllItems);
router.get('/:id', itemController.getItemById);
exports.default = router;
//# sourceMappingURL=item.js.map