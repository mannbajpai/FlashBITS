import Admin from "../models/Admin.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (username, password) => {
    const admin = await Admin.findByPk(username);
    if (!admin) {
        throw new Error('Admin not found');
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: admin.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};


export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
};
