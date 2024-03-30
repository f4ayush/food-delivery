import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Item } from '../models/Item';
import { Organization } from '../models/Organization';
import { Pricing } from '../models/Pricing';

export default class UserSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
    /*     const itemRepository =  dataSource.getRepository(Item);
        const pricingRepository =  dataSource.getRepository(Pricing);
        const organizationRepository =  dataSource.getRepository(Organization);

        */
        const itemFactory = await factoryManager.get(Item);
        const pricingFactory = await factoryManager.get(Pricing);
        const organizationFactory = await factoryManager.get(Organization);


        // save 5 factory generated entities, to the database
        await organizationFactory.saveMany(5);
        await itemFactory.saveMany(5);
        await pricingFactory.saveMany(5);
    }
}