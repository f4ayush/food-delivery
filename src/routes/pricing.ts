// src/routes/pricingRoutes.ts
import express from 'express';
import { PricingController } from '../controllers/Pricing';

const router = express.Router();
const pricingController = new PricingController();

router.get('/:organizationId/:itemId', pricingController.getPricingForOrganizationAndItem);

export default router;
