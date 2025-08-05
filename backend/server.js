const express=require('express');

const connectDB = require('./config/db');
const cors=require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app=express();


app.use(cors());
app.use(express.json());
const authRoutes= require('./routes/authRoutes')
const userRoutes= require('./routes/usersRoutes');
const adminRoutes= require('./routes/adminRoutes');
app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);  
app.use('/api/admin',adminRoutes);


connectDB().then(()=>{
    console.log('Connected to MongoDB');
    
app.listen(5000,()=>{
    console.log('Server is running on port 5000');
});
}).catch((err)=>{
    console.error('Error connecting to MongoDB:', err);
})