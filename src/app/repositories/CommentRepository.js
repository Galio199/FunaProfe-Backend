import { Comment } from '../models/index.js';
import { CommentDTO } from '../DTO/CommentDTO.js';

class CommentRepository {

    /** Guardar un comentario
     * @param {object} comment - Objeto con los datos del comentario
     * @returns {Promise<boolean>} -True si se creó el comentario, false si no se creó
    */
    async createComment(comment) {
        try {
            const created = await Comment.create(comment);
            return !!created; // Devuelve true si se creó el comentario, false si no se creó
        } catch (error) {
            throw new Error('Error al crear el comentario: ' + error.message);
        }
    }

    /** Eliminar un comentario por el id
     * @param {number} id - El id del comentario a eliminar
     * @returns {Promise<boolean>} -true si se eliminó el comentario, false si no se encontró
    */
    async deleteComment(id) {
        try {
            const deleted = await Comment.destroy({ where: { id } });
            return deleted > 0;
        } catch (error) {
            throw new Error('Error al eliminar el comentario: ' + error.message);
        }
    }

    /** Actualizar el contenido de un comentario
     * @param {number} id - El id del comentario a actualizar
     * @param {string} content - El contenido a actualizar
     * @returns {Promise<boolean>} -true si se actualizó el comentario, false si no se encontró
    */
    async updateComment(id, content) {
        try {
            const [updated] = await Comment.update({ content }, { where: { id } });
            return updated > 0;
        } catch (error) {
            throw new Error('Error al actualizar el comentario: ' + error.message);
        }
    }

    /** Actualizar los likes de un comentario
     * @param {number} id - El id del comentario a actualizar
     * @param {number} likes - La cantidad de likes a actualizar
     * @returns {Promise<boolean>} -true si se actualizó el comentario, false si no se encontró
    */
    async updateLikes(id, likes) {
        try {
            const [updated] = await Comment.update({ likes }, { where: { id } });
            return updated > 0;
        } catch (error) {
            throw new Error('Error al actualizar los likes del comentario: ' + error.message);
        }
    }

    /** Listar los comentarios que le han hecho a un profesor ordenados por el numero de likes
     * @param {number} professorId - El id del profesor
     * @returns {Promise<CommentDTO[]>} -Lista de comentarios ordenados por likes
    */
    async getCommentsByProfessor(professorId) {
        try {
            const commets = await Comment.findAll({
                where: { professorId },
                order: [['likes', 'DESC']],
                atributes: ['id', 'content', 'likes']
            });
            return commets.map(comment => new CommentDTO(comment.toJSON()));
        } catch (error) {
            throw new Error('Error al listar los comentarios del profesor: ' + error.message);
        }
    }

    /** Listar los comentarios que ha hecho un usuario ordenados por el numero de likes
     * @param {number} userId - El id del usuario
     * @returns {Promise<CommentDTO[]>} -Lista de comentarios ordenados por likes
    */
    async getCommentsByUser(userId) {
        try {
            const comments = await Comment.findAll({
                where: { userId },
                order: [['likes', 'DESC']],
                atributes: ['id', 'professorId', 'content', 'likes']
            });
            return comments.map(comment => new CommentDTO(comment.toJSON()));
        } catch (error) {
            throw new Error('Error al listar los comentarios del usuario: ' + error.message);
        }
    }

    /** Obtener un comentario por el id del usuario y el id del profesor
     * @param {number} professorId - El id del profesor
     * @param {number} userId - El id del usuario
     * @returns {Promise<CommentDTO|null>} -El comentario o null si no existen.
    */
    async getComment(professorId, userId) {
        try {
            const comment = await Comment.findOne({
                where: { professorId, userId },
                attributes: ['id', 'content', 'likes']
            })
            return comment ? new CommentDTO(comment.toJSON()) : null;
        } catch (error) {
            throw new Error('Error al obtener el comentario: ' + error.message);
        }
    }
}

export default new CommentRepository();