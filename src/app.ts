import express from 'express'
import config from 'config'
import router from './router'

const app = express();
const port = config.get<number>('port');

app.use(express.json());

app.use("/api", router);

app.listen(port, ()=>{
    console.log(`rodando na porta ${port}`);
})