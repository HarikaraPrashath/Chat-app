import mongoose from "mongoose";
const connecttoDB = async()=> {
  try{
        await mongoose.connect(process.env.DB_CONNECTION)
        console.log("Connect with DB")
  }
  catch(error){
    console.log("Error connecting with DB")
  }
}

export default connecttoDB
