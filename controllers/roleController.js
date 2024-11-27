const Role = require('../models/Role');
const logger = require('../utils/logger');

// Create a new role
exports.createRole = async (req, res) => {
    const { role, permissions } = req.body;
    try {
        const newRole = new Role({ role, permissions });
        await newRole.save();
        logger.info(`Role ${role} created successfully`);
        res.status(201).json({ message: 'Role created' });
    } catch (error) {
        logger.error('Failed to create role', error);
        res.status(500).json({ error: 'Failed to create role' });
    }
};

// Get all roles
exports.getRoles = async (req, res) => {
    try {
        const roles = await Role.find();
        res.status(200).json(roles);
    } catch (error) {
        logger.error('Failed to retrieve roles', error);
        res.status(500).json({ error: 'Failed to retrieve roles' });
    }
};
