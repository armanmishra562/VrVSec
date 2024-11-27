const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');

// Authenticate the token
exports.authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        next();
    } catch (err) {
        logger.error('Invalid token');
        res.status(403).json({ error: 'Invalid token' });
    }
};

// Authorize user based on roles
exports.authorizeRoles = (...allowedRoles) => (req, res, next) => {
    const { roles } = req.user;
    if (!roles.some(role => allowedRoles.includes(role))) {
        logger.warn('Unauthorized access attempt');
        return res.status(403).json({ error: 'Access denied' });
    }
    next();
};
