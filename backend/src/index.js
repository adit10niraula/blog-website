import dotenv from 'dotenv'
import Connect_Db from "./db/index.js";
import cors  from 'cors'
import cookieParser from 'cookie-parser'
import { app } from './app.js';

dotenv.config({
    path: './.env'
});


Connect_Db()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server runnning in port: ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongose db connection fail", err)
})