import {CommentRating} from '../models/index.js';
import {CommentRatingDTO} from '../DTO/CommentRatingDTO.js';

class CommentRatingRepository {

    /** Guardar una calificación-comentario
     * @param {object} commentRating - Objeto con los datos de la calificación-comentario
     * @returns {Promise<boolean>} -True si se creó la calificación-comentario, false si no se creó
    */
   async createCommentRating(commentRating) {
        try {
            const newCommentRating = await CommentRating.create(commentRating);
            return !!newCommentRating;
        } catch (error) {
            throw new Error('Error al crear la calificación-comentario: ' + error.message);
        }
    }

    /** Eliminar una calificación-comentario por el id
     * @param {number} commentId - El id del comentario
     * @param {number} userId - El id del usuario
     * @returns {Promise<boolean>} -true si se eliminó la calificación-comentario, false si no se encontró
    */
    async deleteCommentRating(commentId, userId) {
        try {
            const deleted = await CommentRating.destroy({ where: { commentId, userId} });
            return deleted > 0;
        } catch (error) {
            throw new Error('Error al eliminar la calificación-comentario: ' + error.message);
        }
    }

    /** Verificar si un usuario ya le dio like a un comentario
     * @param {number} commentId - El id del comentario a verificar
     * @param {number} userId - El id del usuario a verificar
     * @return {Promise<boolean>} - true si el usuario ya le dio like al comentario, false si no
    */
    async existsUserRating(commentId, userId) {
        try {
            const exists = await CommentRating.findOne({ where: { commentId, userId } });
            return exists > 0;
        } catch (error) {
            throw new Error('Error al verificar la calificación-comentario: ' + error.message);
        }
    }
}

export default new CommentRatingRepository();