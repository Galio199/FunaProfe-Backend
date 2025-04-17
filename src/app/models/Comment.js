import { DataTypes } from "sequelize";
import { sequelize } from "../database/connect.js";

const Comment = sequelize.define("comment", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    professorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "id_profesor",
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "id_usuario",
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        field: "contenido",
    },
    likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
}, {
    tableName: "comentario",
    timestamps: false,
    indexes: {
        unique: true,
        fields: ["id_usuario", "id_profesor"],
    }
});

export default Comment;