import "reflect-metadata"
import 'dotenv/config'
import express from 'express';
import { AppDataSource } from "./dataSource"
import cors from "cors"
import routes from "./routes"

const PORT = process.env.PORT || 3000
const app = express();
app.use(cors());
app.use("/", routes)
app.use("/", (req, res) => {
    res.send("hi")
})

AppDataSource.initialize().then(async () => {
    app.listen(PORT, () => {
        console.log('Server is listening on port 3000');
    });
}).catch(error => console.log(error))

