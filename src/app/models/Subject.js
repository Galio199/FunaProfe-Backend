import { DataTypes } from "sequelize";
import SEQUELIZE from "../../database/connect.js";

const Subject = SEQUELIZE.define('Subject', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'nombre',
    },
}, {
    tableName: 'materia',
    timestamps: false,
});

export default Subject;