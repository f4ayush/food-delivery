// src/routes/organizationRoutes.ts
import express from 'express';
import { OrganizationController } from '../controllers/Organization';

const router = express.Router();
const organizationController = new OrganizationController();

router.get('/', organizationController.getAllOrganizations);
router.get('/:id', organizationController.getOrganizationById);

export default router;
