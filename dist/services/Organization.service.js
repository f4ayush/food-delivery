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
exports.OrganizationService = void 0;
const dataSource_1 = require("../dataSource");
const Organization_1 = require("../models/Organization");
class OrganizationService {
    constructor() {
        this.organizationRepository = dataSource_1.AppDataSource.getRepository(Organization_1.Organization);
    }
    getAllOrganizations() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.organizationRepository.createQueryBuilder("organization").getMany();
        });
    }
    getOrganizationById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.organizationRepository.createQueryBuilder("organization").where("organization.id = :id", { id }).getOne();
        });
    }
}
exports.OrganizationService = OrganizationService;
//# sourceMappingURL=Organization.service.js.map