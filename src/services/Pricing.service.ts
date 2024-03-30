// src/services/PricingService.ts
import { AppDataSource } from '../dataSource';
import { Pricing } from '../models/Pricing';

export class PricingService {
    private pricingRepository = AppDataSource.getRepository(Pricing);

    async getPricingForOrganizationAndItem(organizationId: string, itemId: number): Promise<Pricing | undefined> {
        return this.pricingRepository.findOne({ where: { organizationId } });
    }

    async calculateTotalPrice(organizationId: string, itemType: string, zone: string, totalDistance: number): Promise<number> {
        // Fetch pricing details from database based on provided parameters
        const pricing = await this.pricingRepository.findOne({
            where: { organizationId, itemType, zone }
        });

        if (!pricing) {
            throw new Error('Pricing not found');
        }

        // Calculate total price based on distance and pricing rates
        const basePrice = pricing.baseDistanceInKm * pricing.kmPrice;
        const additionalDistance = Math.max(0, totalDistance - pricing.baseDistanceInKm);
        const totalPrice = basePrice + additionalDistance * pricing.kmPrice;

        return totalPrice;
    }

    // Implement other methods as needed
}
