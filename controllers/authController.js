const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const logger = require('../utils/logger');

// Register a new user
exports.register = async (req, res) => {
    const { username, password, roles } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword, roles });
        await user.save();
        logger.info(`User ${username} registered successfully`);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        logger.error('Registration failed', error);
        res.status(500).json({ error: 'Registration failed' });
    }
};

// User login
exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            logger.warn(`Login attempt failed for non-existing user: ${username}`);
            return res.status(404).json({ error: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            logger.warn(`Invalid login attempt for user: ${username}`);
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id, roles: user.roles }, process.env.JWT_SECRET, { expiresIn: '1h' });
        logger.info(`User ${username} logged in successfully`);
        res.status(200).json({ token });
    } catch (error) {
        logger.error('Login failed', error);
        res.status(500).json({ error: 'Login failed' });
    }
};
