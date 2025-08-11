const validateSignIn = (req, res, next) => {
 try{
   console.log("In the valiodation")
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  next();
 } catch (error) {
    return res.status(400).json({ error: 'fields are not valid' });
 }


};

module.exports = validateSignIn;
