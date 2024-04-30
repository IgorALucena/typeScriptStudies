require("dotenv").config();
import express from 'express'
import config from 'config'
import router from '../routes/router'
import connect from '../config/db';
import Logger from '../config/logger';

const app = express();
const port = config.get<number>('port');

app.use(express.json());

app.use("/api", router);

app.listen(port, async ()=>{

    await connect();

    Logger.info(`rodando na porta ${port}`);
})