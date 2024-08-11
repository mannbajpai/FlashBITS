import * as AuthService from '../services/authService.js';

export const login = async (req, res) => {
    try {
        const token = await AuthService.login(req.body.username, req.body.password);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const protect = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = AuthService.verifyToken(token);
    if (!decoded) {
        return res.status(401).json({ error: 'Invalid token' });
    }

    req.adminId = decoded.id;
    next();
};
