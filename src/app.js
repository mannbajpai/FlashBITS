import express from 'express';
import dotenv from 'dotenv';
import sequelize from './configDb.js';
import flashcardRoutes from './routes/flashcardRoute.js';
import authRoutes from './routes/authRoute.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', flashcardRoutes);
app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
    app.listen(process.env.PORT || 5000, () => {
        console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
});
