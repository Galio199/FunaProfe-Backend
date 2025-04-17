/**
 * CommentDTO
 *
 * Este DTO representa la información visible de un comentario realizado a un profesor.
 * @typedef {Object} CommentDTO
 * @property {number} id - Id del comentario
 * @property {number} [professorId] - Id del profesor al que se le realizó el comentario (opcional)
 * @property {string} content - Contenido del comentario
 * @property {number} likes - Cantidad de "me gusta" que tiene el comentario
 */
class CommentDTO {
    constructor({ id, professorId = null, content, likes } = {}) {
        this.id = id;
        if (professorId !== null) this.professorId = professorId;
        this.content = content;
        this.likes = likes;
    }
}

export default CommentDTO;