"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Pricing_1 = require("./models/Pricing");
const Organization_1 = require("./models/Organization");
const Item_1 = require("./models/Item");
const options = {
    "url": process.env.DB_URL,
    "type": "postgres",
    "port": 5432,
    "synchronize": true,
    "logging": true,
    "logger": "advanced-console",
    "entities": [
        Pricing_1.Pricing, Organization_1.Organization, Item_1.Item
    ],
    "extra": {
        "ssl": {
            "rejectUnauthorized": false
        }
    },
    "seeds": ["src/seeders/*{.ts,.js}"],
    "factories": ["src/seeders/*{.ts,.js}"],
};
exports.AppDataSource = new typeorm_1.DataSource(options);
//# sourceMappingURL=dataSource.js.map