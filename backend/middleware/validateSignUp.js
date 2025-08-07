
const validateSignUp = async(req, res, next) => {
  console.log("in validateSignUp middleware");
  console.log(req.body);
  const { firstName, lastName, email, password, gender } = req.body;
  if (!firstName || !email || !password || !gender ||!lastName) {
    return res.status(400).json({ error: 'First name, email, password,lastName, gender and role are required' });
  }

  console.log("here");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters long' });
  }

  if (!['male', 'female', 'other'].includes(gender)) {
    return res.status(400).json({ error: 'Gender must be either male, female or other' });
  }

  next();

};

module.exports = validateSignUp;
