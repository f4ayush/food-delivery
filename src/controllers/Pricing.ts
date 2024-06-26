// src/controllers/PricingController.ts
import { Request, Response } from 'express';
import { PricingService } from '../services/Pricing.service';

const pricingService = new PricingService();

export class PricingController {
   
    async getPricing(req: Request, res: Response): Promise<void> {
        const { organization_id, item_type, zone, total_distance } = req.query;

        // Validate request parameters
        if (!organization_id || !item_type || !zone || !total_distance) {
            res.status(400).json({ error: 'Missing required parameters' });
            return;
        }

        // Parse and validate total distance
        const parsedTotalDistance = parseFloat(total_distance as string);
        if (isNaN(parsedTotalDistance) || parsedTotalDistance <= 0) {
            res.status(400).json({ error: 'Invalid total distance' });
            return;
        }

        try {
            // Call pricing service to calculate total price
            const totalPrice = await pricingService.calculateTotalPrice(
                organization_id as string,
                item_type as string,
                zone as string,
                parsedTotalDistance
            );

            if(totalPrice < 0){
                res.status(404).json({ error: 'Pricing not found' });
            }else{
                res.json({ total_price: totalPrice/100 });
            }
        } catch (error) {
            console.error('Error fetching pricing:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}
