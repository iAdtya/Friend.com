import mongoose from 'mongoose';  
import dotenv from 'dotenv';
dotenv.config();

const uri = process.env.uri
// console.log(uri);
 
export const connectDB = async () => {
  try{

    await mongoose.connect(uri,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoose connected:: Atlas cluster");
  }catch(error){
    console.log(error);
  }
};

