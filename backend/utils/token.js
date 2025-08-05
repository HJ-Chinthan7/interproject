const jwt=require('jsonwebtoken');

const token=(user)=>{
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1h'});
    return token;
}

module.exports=token;