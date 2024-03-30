import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { SeederOptions } from "typeorm-extension"
const options : DataSourceOptions & SeederOptions = {
  "type": "postgres",
  "host": process.env.DB_HOST,
  "port": 5432,
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": "food_delivery_app_su12",
  "synchronize": true,
  "logging": false,
  "logger":"simple-console",
  "entities": [
    "src/models/*.ts"
  ],

  
  "seeds":["src/seeders/*{.ts,.js}"],
  "factories":["src/seeders/*{.ts,.js}"],
  
  
}
export const AppDataSource = new DataSource(options)
  