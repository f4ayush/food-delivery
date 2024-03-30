import "reflect-metadata"
import express from 'express';
import { AppDataSource } from "./dataSource"
import routes from "./routes"
import { runSeeders } from "typeorm-extension";
const app = express();
app.use("/", (req, res) => {
    res.send("hi")
})

app.use("/", routes)
AppDataSource.initialize().then(async () => {
    
    await runSeeders(AppDataSource);
    app.listen(3000, () => {
        console.log('Server is listening on port 3000');
    });
}).catch(error => console.log(error))

