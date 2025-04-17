import { DataTypes } from "sequelize";
import SEQUELIZE from "../../database/connect.js";

const CommentRating = SEQUELIZE.define('CommentRating', {
    commentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_comentario',
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_usuario',
        primaryKey: true,
    },
}, {
    tableName: 'calificacion_comentario',
    timestamps: false,
});

export default CommentRating;

