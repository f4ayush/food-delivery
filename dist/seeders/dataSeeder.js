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
const Item_1 = require("../models/Item");
const Organization_1 = require("../models/Organization");
const Pricing_1 = require("../models/Pricing");
class UserSeeder {
    run(dataSource, factoryManager) {
        return __awaiter(this, void 0, void 0, function* () {
            /*     const itemRepository =  dataSource.getRepository(Item);
                const pricingRepository =  dataSource.getRepository(Pricing);
                const organizationRepository =  dataSource.getRepository(Organization);
        
                */
            const itemFactory = yield factoryManager.get(Item_1.Item);
            const pricingFactory = yield factoryManager.get(Pricing_1.Pricing);
            const organizationFactory = yield factoryManager.get(Organization_1.Organization);
            // save 5 factory generated entities, to the database
            yield organizationFactory.saveMany(5);
            yield itemFactory.saveMany(5);
            yield pricingFactory.saveMany(5);
        });
    }
}
exports.default = UserSeeder;
//# sourceMappingURL=dataSeeder.js.map