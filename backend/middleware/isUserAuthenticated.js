const jwt = require('jsonwebtoken');
const User = require('../models/User');

const isUserAuthenticated = async (req, res, next) => {
    try {
       const token = req.cookies?.authToken;
      
        if (!token) {
            return res.status(401).json({ 
                success: false, 
                message: 'Access denied. No token provided.' 
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(decoded.id).select('-password');
        
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid token. User not found.' 
            });
        }

        req.user = user;
        next();
        
    } catch (error) {
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ 
                success: false, 
                message: 'Invalid token.' 
            });
        }
        
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ 
                success: false, 
                message: 'Token expired.' 
            });
        }
        
        return res.status(500).json({ 
            success: false, 
            message: 'Server error during authentication.' 
        });
    }
};

module.exports = isUserAuthenticated;
