import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { SeederOptions } from "typeorm-extension"
const options : DataSourceOptions & SeederOptions = {
  "type": "postgres",
  "host": "localhost",
  "port": 5432,
  "username": "postgres",
  "password": "ayush",
  "database": "food_delivery_app",
  "synchronize": true,
  "logging": false,
  "entities": [
    "src/models/*.ts"
  ],
  
  "seeds":["src/seeders/*{.ts,.js}"],
  "factories":["src/seeders/*{.ts,.js}"],
  
  
}
export const AppDataSource = new DataSource(options)
  

  /* 
  
  "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "ayush",
    "database": "food_delivery_app",
    "synchronize": true,
    "logging": false,
    "entities": [
      "src/models/*.ts"
    ],
    "cli": {
      "entitiesDir": "src/models"
    }
    */