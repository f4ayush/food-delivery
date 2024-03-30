// src/controllers/ItemController.ts
import { Request, Response } from 'express';
import { ItemService } from '../services/Item.service';

const itemService = new ItemService();

export class ItemController {
    async getAllItems(req: Request, res: Response): Promise<void> {
        try {
            const items = await itemService.getAllItems();
            res.json(items);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getItemById(req: Request, res: Response): Promise<void> {
        const id = req.params.id;
        try {
            const item = await itemService.getItemById(id);
            if (item) {
                res.json(item);
            } else {
                res.status(404).json({ error: 'Item not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    // Implement other methods as needed
}
