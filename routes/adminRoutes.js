const express = require('express');
const { createRole, getRoles } = require('../controllers/roleController');
const { authenticateToken, authorizeRoles } = require('../middlewares/authMiddleware');
const router = express.Router();

// Create new role
router.post('/roles', authenticateToken, authorizeRoles('Admin'), createRole);

// Get all roles
router.get('/roles', authenticateToken, authorizeRoles('Admin'), getRoles);

module.exports = router;
