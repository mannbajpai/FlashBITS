import { DataTypes } from 'sequelize';
import sequelize from '../configDb.js';

const Flashcard = sequelize.define('Flashcard', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

export default Flashcard;
