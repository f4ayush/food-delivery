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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationController = void 0;
const Organization_service_1 = require("../services/Organization.service");
const organizationService = new Organization_service_1.OrganizationService();
class OrganizationController {
    getAllOrganizations(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const organizations = yield organizationService.getAllOrganizations();
                res.json(organizations);
            }
            catch (error) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
    getOrganizationById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                const organization = yield organizationService.getOrganizationById(id);
                if (organization) {
                    res.json(organization);
                }
                else {
                    res.status(404).json({ error: 'Organization not found' });
                }
            }
            catch (error) {
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
}
exports.OrganizationController = OrganizationController;
//# sourceMappingURL=Organization.js.map