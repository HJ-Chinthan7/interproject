const mangoose=require('mongoose');

const connectDB=async(req,res)=>{
    try {
        await mangoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.error('MongoDB connection failed:', error);
    }
}

module.exports=connectDB;