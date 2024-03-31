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
exports.PricingFactory = void 0;
const typeorm_extension_1 = require("typeorm-extension");
const Pricing_1 = require("../models/Pricing");
const Organization_1 = require("../models/Organization");
const dataSource_1 = require("../dataSource");
exports.PricingFactory = (0, typeorm_extension_1.setSeederFactory)(Pricing_1.Pricing, (faker) => __awaiter(void 0, void 0, void 0, function* () {
    const pricing = new Pricing_1.Pricing();
    const organizations = yield dataSource_1.AppDataSource.getRepository(Organization_1.Organization).find();
    const randomOrganization = faker.helpers.arrayElement(organizations);
    pricing.organization = randomOrganization.id;
    pricing.itemType = faker.helpers.arrayElement(['perishable', 'non-perishable']),
        pricing.zone = faker.helpers.arrayElement(["east", "west", "north", "south", "central"]),
        pricing.baseDistanceInKm = faker.number.int({ min: 5, max: 10 }),
        pricing.kmPrice = faker.number.int({ min: 100, max: 500 }),
        pricing.fixedPrice = faker.number.int({ min: 100, max: 500 });
    return pricing;
}));
//# sourceMappingURL=pricing.factory.js.map