import CommentRatingDTO from '../DTO/CommentRatingDTO.js';
import commentRatingRepository from '../repositories/CommentRatingRepository.js';

class CommentRatingService {

    /** Verificar si un usuario ya le ha dado like a un comentario
     * @param {number} commentId - El id del comentario
     * @param {string} userId - El correo del usuario
     * @return {Promise<boolean>} -true si el usuario ya le dio like al comentario, false si no
    */
    async existsUserRating(commentId, userId) {
        try {
            const exists = await commentRatingRepository.existsUserRating(commentId, userId);
            return exists;
        } catch (error) {
            throw new Error('Error al verificar la calificación-comentario: ' + error.message);
        }
    }

    /** Dar/quitar el like a un comentario. Le da like si no lo tiene, y lo quita si ya lo tiene
     * @param {number} commentId - El id del comentario
     * @param {string} userId - El correo del usuario
     * @return {Promise<boolean>} -true si se le dio like al comentario, false si se le quitó el like
     */
    async toggleLike(commentId, userId) {
        try {
            //Verificar si el comentario ya existe
            const exists = await this.existsUserRating(commentId, userId);
            if (exists) {
                // Si ya existe, lo eliminamos
                await commentRatingRepository.deleteCommentRating(commentId, userId);
                return false;
            } else {
                // Si no existe, lo creamos
                await commentRatingRepository.createCommentRating({ commentId, userId });
                return true;
            }
        } catch (error) {
            throw new Error('Error al alternar el like: ' + error.message);
        }
    }
}

export default new CommentRatingService();