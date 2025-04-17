import { DataTypes } from "sequelize";
import SEQUELIZE from "../../database/connect.js";

const SubjectProfessor = SEQUELIZE.define('SubjectProfessor', {
    subjectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_materia',
        primaryKey: true,
    },
    professorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_profesor',
        primaryKey: true,
    },
}, {
    tableName: 'materia_profesor',
    timestamps: false,
});

export default SubjectProfessor;