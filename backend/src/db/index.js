import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'


const Connect_Db = async()=>{
    try{
        
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`)
        console.log(`\n mongodb connected !!! Db host: ${connectionInstance.connection.port}`)


    }catch(error){
        console.log("error connect the databse ", error);
        process.exit(1)
    }
}


export default Connect_Db