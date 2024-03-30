// src/services/ItemService.ts
/* import { getRepository } from 'typeorm'; */
import { AppDataSource } from '../dataSource';
import { Item } from '../models/Item';

export class ItemService {
    private itemRepository = AppDataSource.getRepository(Item);

    async getAllItems(): Promise<Item[]> {
        return this.itemRepository.find();
    }

    async getItemById(id: number): Promise<Item | undefined> {
        return this.itemRepository.findOne({where: {id: id}});
    }

    // Implement other methods as needed
}
