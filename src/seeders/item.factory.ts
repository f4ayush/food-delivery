import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { Item } from "../models/Item";

export const ItemFactory = setSeederFactory(Item, (faker: Faker) => {
  const item = new Item();
  const itemTypes = ["perishable", "non-perishable"]
  item.type = faker.helpers.arrayElement(itemTypes)
  item.description = faker.commerce.productDescription()
  return item;
});