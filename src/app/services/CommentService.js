import commentRepository from '../repositories/CommentRepository.js';
import CommentRatingService from './CommentRatingService.js';
import CommentDTO from '../DTO/CommentDTO.js';
import CommentWhitHasLikeDTO from '../DTO/CommentWhitHasLikeDTO.js';

class CommentService {

    /** Guardar un nuevo comentario
     * @param {object} comment - Objeto con los datos del comentario
     * @returns {Promise<boolean>} -True si se creó el comentario, false si no se creó
     */
    async createComment(comment) {
        try {
            return await commentRepository.createComment(comment);
        } catch (error) {
            throw new Error('Error al crear el comentario: ' + error.message);
        }
    }

    /** Eliminar un comentario por el id
     * @param {number} id - El id del comentario a eliminar
     * @return {Promise<boolean>} -true si se eliminó el comentario, false si no se encontró
     */
    async deleteComment(id) {
        try {
            return await commentRepository.deleteComment(id);
        } catch (error) {
            throw new Error('Error al eliminar el comentario: ' + error.message);
        }
    }

    /** Listar los comentarios que le han hecho a un profesor y verificar si el usuario que los solicito ya les ha dado like
     * @param {number} professorId - El id del profesor
     * @param {number} userId - El id del usuario que solicita los comentarios
     * @return {Promise<CommentWhitHasLikeDTO[]>} -Lista de comentarios del profesor
     */
    async getCommentsByProfessor(professorId, userId = null) {
        try {
            // Obtener los comentarios del profesor
            const comments = await commentRepository.getCommentsByProfessor(professorId);

            // Convertir los comentarios a CommentWhitHasLikeDTO
            const commentsWithLike = await Promise.all(
                comments.map(async (comment) => {
                    let hasLike = false;

                    // Verificar si es un usuario loggeado (se proporciono el id) y si le ha dado like al comentario
                    if (userId !== null) {
                        hasLike = await CommentRatingService.existsUserRating(comment.id, userId);
                    }

                    return new CommentWhitHasLikeDTO(comment, hasLike);
                })
            );
            return commentsWithLike;
        } catch (error) {
            throw new Error('Error al obtener los comentarios: ' + error.message);
        }
    }

    /** Listar los comentarios que ha realizado un usuario
     * @param {string} userId - El correo del usuario
     * @return {Promise<CommentDTO[]>} -Lista de comentarios del usuario
     */
    async getCommentsByUser(userId) {
        try {
            return await commentRepository.getCommentsByUser(userId);
        } catch (error) {
            throw new Error('Error al obtener los comentarios: ' + error.message);
        }
    }

    /** Obtener un comentario por el id del usuario y el id del profesor
     * @param {number} professorId - El id del profesor
     * @param {string} userId - El correo del usuario
     * @return {Promise<CommentDTO>} -El comentario encontrado
     */
    async getComment(professorId, userId) {
        try {
            return await commentRepository.getComment(professorId, userId);
        } catch (error) {
            throw new Error('Error al obtener el comentario: ' + error.message);
        }
    }

    /** Actualizar el contenido de un comentario
     * @param {number} id - El id del comentario a actualizar
     * @param {string} content - El nuevo contenido del comentario
     * @return {Promise<CommentDTO>} -El comentario actualizado
     */
    async updateComment(id, content) {
        try {
            return await commentRepository.updateComment(id, content);
        } catch (error) {
            throw new Error('Error al actualizar el comentario: ' + error.message);
        }
    }

    /** Actualizar los likes de un comentario
     * @param {number} id - El id del comentario a actualizar
     * @param {number} likes - El nuevo numero de likes del comentario
     * @return {Promise<CommentDTO>} -El comentario actualizado 
    */
    async updateLikes(id, likes) {
        try {
            return await commentRepository.updateLikes(id, likes);
        } catch (error) {
            throw new Error('Error al actualizar los likes del comentario: ' + error.message);
        }
    }
}

export default new CommentService();