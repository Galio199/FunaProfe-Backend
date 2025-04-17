import { DataTypes } from "sequelize";
import SEQUELIZE from "../../database/connect.js";

const ProfessorRating = SEQUELIZE.define('ProfessorRating', {
    professorId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'id_profesor',
    },
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        field: 'id_usuario',
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'calificacion',
    },
}, {
    tableName: 'calificacion_profesor',
    timestamps: false,
});

export default ProfessorRating;