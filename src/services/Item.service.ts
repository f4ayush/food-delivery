// src/services/ItemService.ts
/* import { getRepository } from 'typeorm'; */
import { AppDataSource } from '../dataSource';
import { Item } from '../models/Item';

export class ItemService {
    private itemRepository = AppDataSource.getRepository(Item);

    async getAllItems(): Promise<Item[]> {
        return this.itemRepository.createQueryBuilder("item").getMany();
    }

    async getItemById(id: string): Promise<Item | undefined> {
        return this.itemRepository.createQueryBuilder("item").where("item.id = :id", { id }).getOne();
    }
    
}
