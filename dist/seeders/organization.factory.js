"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationFactory = void 0;
const typeorm_extension_1 = require("typeorm-extension");
const Organization_1 = require("../models/Organization");
exports.OrganizationFactory = (0, typeorm_extension_1.setSeederFactory)(Organization_1.Organization, (faker) => {
    const organization = new Organization_1.Organization();
    organization.name = faker.company.name();
    return organization;
});
//# sourceMappingURL=organization.factory.js.map