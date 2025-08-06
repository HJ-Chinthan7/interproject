const jwt=require('jsonwebtoken');

const token=(user)=>{
    console.log("generated');")
    const token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'});
    return token;
}

module.exports=token;