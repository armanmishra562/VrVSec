const express = require('express');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');
const router = express.Router();

// Admin route
router.get('/admin', authenticateToken, authorizeRoles('Admin'), (req, res) => {
    res.status(200).json({ message: 'Welcome Admin!' });
});

// User route
router.get('/user', authenticateToken, authorizeRoles('User', 'Admin'), (req, res) => {
    res.status(200).json({ message: 'Welcome User!' });
});

module.exports = router;
