import { DataTypes } from "sequelize";
import SEQUELIZE from "../../database/connect.js";

const Professor = SEQUELIZE.define('Professor', {
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
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        field: 'calificacion',
    },
    ratingCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'numeroCal',
    },
    ratingSum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'sumaCal',
    },
    photoPath: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'ruta_foto',
    },
}, {
    tableName: 'profesor',
    timestamps: false,
});

export default Professor;