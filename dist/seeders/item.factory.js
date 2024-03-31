"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemFactory = void 0;
const typeorm_extension_1 = require("typeorm-extension");
const Item_1 = require("../models/Item");
exports.ItemFactory = (0, typeorm_extension_1.setSeederFactory)(Item_1.Item, (faker) => {
    const item = new Item_1.Item();
    const itemTypes = ["perishable", "non-perishable"];
    item.type = faker.helpers.arrayElement(itemTypes);
    item.description = faker.commerce.productDescription();
    return item;
});
//# sourceMappingURL=item.factory.js.map