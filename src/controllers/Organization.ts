// src/controllers/OrganizationController.ts
import { Request, Response } from 'express';
import { OrganizationService } from '../services/Organization.service';

const organizationService = new OrganizationService();

export class OrganizationController {
    async getAllOrganizations(req: Request, res: Response): Promise<void> {
        try {
            const organizations = await organizationService.getAllOrganizations();
            res.json(organizations);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getOrganizationById(req: Request, res: Response): Promise<void> {
        const id = parseInt(req.params.id);
        try {
            const organization = await organizationService.getOrganizationById(id);
            if (organization) {
                res.json(organization);
            } else {
                res.status(404).json({ error: 'Organization not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Implement other methods as needed
}
