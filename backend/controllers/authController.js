const User = require('../models/User');
const bcrypt = require('bcryptjs');
const token=require('../utils/token');

const signup=async(req,res)=>{
  try{
const { firstName, lastName, email, password,gender } = req.body;
const existingUser = await User.findOne({ email });
if (existingUser) {res.status(400).json({ error: 'User already exists' });}
const hashedPassword = await bcrypt.hash(password,10);
const user = new User({firstName, lastName, email, password:hashedPassword,gender});
await user.save();
const authToken = token(user);
res.cookie('authToken', authToken, {
  httpOnly: true, 
  secure: process.env.NODE_ENV === 'production', 
  maxAge: 3600000 
}); 
res.status(201).json({
  success: true,
  user:{
    "firstName":user.firstName,
    "lastName":user.lastName,
   "email" :user.email,
    "role":user.role,
    "gender":user.gender,
    "id":user._id
  }})

  }catch(error){
    res.status(500).json({
      success: false, 
      message: 'Server error during signup'
    });
  }
}

const signin=async(req,res)=>{
  try{
    const {email, password} = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    const isMatch=await bcrypt.compare(password, user.password);
    if(!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    const authToken=token(user);
    console.log("here");
    res.cookie('authToken',authToken, {
      secure: process.env.NODE_ENV === 'production',
       httpOnly: true,
        maxAge: 3600000 });
res.status(200).json({message: 'Signin successful',
  user:{
    "firstName": user.firstName,
    "lastName": user.lastName,
    "email": user.email,
    "role": user.role,
    "gender": user.gender,
    "id": user._id
  }
})
  }catch(error){
    res.status(500).json({
      success: false, 
      message: 'Server error during signin'
    });
  }
}
const logout = async (req, res) => {
  res.clearCookie('authToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  });
  res.json({
    success: true,
    message: 'Logged out successfully'
  });
};


module.exports = {
  signup,
  signin,
  logout
};
