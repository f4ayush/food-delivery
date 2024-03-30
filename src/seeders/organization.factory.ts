import { Faker } from "@faker-js/faker";
import { setSeederFactory } from "typeorm-extension";
import { Organization } from "../models/Organization";

export const OrganizationFactory = setSeederFactory(Organization, (faker: Faker) => {
  const organization = new Organization();
  organization.name = faker.company.name();
  return organization;
});