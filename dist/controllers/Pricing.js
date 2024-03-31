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
exports.PricingController = void 0;
const Pricing_service_1 = require("../services/Pricing.service");
const pricingService = new Pricing_service_1.PricingService();
class PricingController {
    getPricing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { organization_id, item_type, zone, total_distance } = req.query;
            // Validate request parameters
            if (!organization_id || !item_type || !zone || !total_distance) {
                res.status(400).json({ error: 'Missing required parameters' });
                return;
            }
            // Parse and validate total distance
            const parsedTotalDistance = parseFloat(total_distance);
            if (isNaN(parsedTotalDistance) || parsedTotalDistance <= 0) {
                res.status(400).json({ error: 'Invalid total distance' });
                return;
            }
            try {
                // Call pricing service to calculate total price
                const totalPrice = yield pricingService.calculateTotalPrice(organization_id, item_type, zone, parsedTotalDistance);
                if (totalPrice < 0) {
                    res.status(404).json({ error: 'Pricing not found' });
                }
                else {
                    res.json({ total_price: totalPrice / 100 });
                }
            }
            catch (error) {
                console.error('Error fetching pricing:', error);
                res.status(500).json({ error: 'Internal server error' });
            }
        });
    }
}
exports.PricingController = PricingController;
//# sourceMappingURL=Pricing.js.map