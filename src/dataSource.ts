import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { SeederOptions } from "typeorm-extension"
import { Pricing } from "./models/Pricing"
import { Organization } from "./models/Organization"
import { Item } from "./models/Item"
const options : DataSourceOptions & SeederOptions = {
  "url":process.env.DB_URL,
  "type": "postgres",
  "port": 5432,
  "synchronize": true,
  "logging": true,
  "logger":"advanced-console",
  "entities": [
    Pricing, Organization, Item
  ],
  "extra":{
    "ssl":{
      "rejectUnauthorized": false
    }
  },

  "seeds":["src/seeders/*{.ts,.js}"],
  "factories":["src/seeders/*{.ts,.js}"],
  
  
}
export const AppDataSource = new DataSource(options)
  