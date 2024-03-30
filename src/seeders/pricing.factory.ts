import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { Pricing } from "../models/Pricing";
import { Organization } from "../models/Organization";
import { AppDataSource } from "../dataSource";

export const PricingFactory = setSeederFactory(Pricing, async(faker: Faker) => {
    const pricing = new Pricing();
    const organizations = await AppDataSource.getRepository(Organization).find();
    const randomOrganization = faker.helpers.arrayElement(organizations);
    pricing.organization = randomOrganization.id;
    pricing.itemType = faker.helpers.arrayElement(['perishable', 'non-perishable']), 
    pricing.zone = faker.helpers.arrayElement(["east","west","north", "south", "central"]), 
    pricing.baseDistanceInKm = faker.number.int({ min: 5, max: 10 }), 
    pricing.kmPrice = faker.number.int({ min: 100, max: 500 }), 
    pricing.fixedPrice = faker.number.int({ min: 100, max: 500 })
    return pricing;
});