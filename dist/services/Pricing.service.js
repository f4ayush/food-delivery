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
exports.PricingService = void 0;
// src/services/PricingService.ts
const dataSource_1 = require("../dataSource");
const Pricing_1 = require("../models/Pricing");
class PricingService {
    constructor() {
        this.pricingRepository = dataSource_1.AppDataSource.getRepository(Pricing_1.Pricing);
    }
    calculateTotalPrice(organizationId, itemType, zone, totalDistance) {
        return __awaiter(this, void 0, void 0, function* () {
            // Fetch pricing details from database based on provided parameters
            const pricing = yield this.pricingRepository
                .createQueryBuilder("pricing")
                .where("pricing.itemType = :itemType", { itemType })
                .andWhere("pricing.zone = :zone", { zone })
                .andWhere("pricing.organizationId = :organizationId", { organizationId })
                .getOne();
            if (!pricing) {
                return -1;
            }
            // Calculate total price based on distance and pricing rates
            const basePrice = pricing.baseDistanceInKm * pricing.kmPrice;
            const additionalDistance = Math.max(0, totalDistance - pricing.baseDistanceInKm);
            const totalPrice = basePrice + additionalDistance * pricing.kmPrice;
            return totalPrice;
        });
    }
}
exports.PricingService = PricingService;
//# sourceMappingURL=Pricing.service.js.map