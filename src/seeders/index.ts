import "reflect-metadata"
import { AppDataSource } from "../dataSource"
import { runSeeders } from "typeorm-extension";

AppDataSource.initialize().then(async () => {
    await runSeeders(AppDataSource);
}).catch(error => console.log(error))

