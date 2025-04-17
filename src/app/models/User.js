import { DataTypes } from "sequelize";
import SEQUELIZE from "../../database/connect.js";

const User = SEQUELIZE.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true,
        },
        allowNull: false,
        field: 'correo',
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'contrasennia',
    },
    isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'verificado',
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        field: 'activo',
    },
}, {
    tableName: 'usuario',
    timestamps: false,
});

export default User;