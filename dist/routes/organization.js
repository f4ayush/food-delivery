"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/organizationRoutes.ts
const express_1 = __importDefault(require("express"));
const Organization_1 = require("../controllers/Organization");
const router = express_1.default.Router();
const organizationController = new Organization_1.OrganizationController();
router.get('/', organizationController.getAllOrganizations);
router.get('/:id', organizationController.getOrganizationById);
exports.default = router;
//# sourceMappingURL=organization.js.map