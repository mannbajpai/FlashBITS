import Admin from "../models/Admin.js";
import jwt from 'jsonwebtoken';

export const login = async (username, password) => {
    console.log(username, password);
    const admin = await Admin.findByPk(username);
    console.log(admin);
    if (!admin) {
        throw new Error('Admin not found');
    }

    if (password === admin.password) {
        const token = jwt.sign({ id: admin.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return token;
    }
    else {
        throw new Error('Invalid credentials');
    }


};


export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
};
