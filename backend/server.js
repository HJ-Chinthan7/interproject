const express=require('express');

const connectDB = require('./config/db');
const cors=require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app=express();
const cookieParser = require('cookie-parser');


const corsOptions = {
    origin: ['https://sage-entremet-911e0c.netlify.app'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin']
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
const authRoutes= require('./routes/authRoutes')
const userRoutes= require('./routes/usersRoutes');
const adminRoutes= require('./routes/adminRoutes');

app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);  
app.use('/api/admin',adminRoutes);

connectDB().then(()=>{
    console.log('Connected to MongoDB');
    
app.listen(process.env.PORT||5000,()=>{
    console.log('Server is running on port 5000');
});
}).catch((err)=>{
    console.error('Error connecting to MongoDB:', err);
})