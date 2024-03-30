// src/services/PricingService.ts
import { AppDataSource } from '../dataSource';
import { Pricing } from '../models/Pricing';

export class PricingService {
    private pricingRepository = AppDataSource.getRepository(Pricing);

    async calculateTotalPrice(organizationId: string, itemType: string, zone: string, totalDistance: number): Promise<number> {
        // Fetch pricing details from database based on provided parameters

        const pricing = await this.pricingRepository
            .createQueryBuilder("pricing")
            .where("pricing.itemType = :itemType", { itemType })
            .andWhere("pricing.zone = :zone", { zone })
            .andWhere("pricing.organizationId = :organizationId", { organizationId })
            .getOne()

        if (!pricing) {
            return -1;
        }

        // Calculate total price based on distance and pricing rates
        const basePrice = pricing.baseDistanceInKm * pricing.kmPrice;
        const additionalDistance = Math.max(0, totalDistance - pricing.baseDistanceInKm);
        const totalPrice = basePrice + additionalDistance * pricing.kmPrice;
        return totalPrice;

    }

}
