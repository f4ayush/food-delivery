import express from 'express';
import organizationRoutes from './organization';
import itemRoutes from './item';
import pricingRoutes from './pricing';

const router = express.Router();

router.use('/organizations', organizationRoutes);
router.use('/items', itemRoutes);
router.use('/pricing', pricingRoutes);

export default router;
