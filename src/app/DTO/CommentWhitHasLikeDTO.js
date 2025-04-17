import CommentDTO from "./CommentDTO";

/**
 * CommentWhitHasLikeDTO
 * 
 * Este DTO representa un comentario de la lista de comentarios que la han hecho a un profesor 
 * cuando es consultado por un usuario.
 * Extiende CommentDTO y agrega la propiedad `hasLike` que indica si el usuario ha dado "me gusta" al comentario.
 * Hereda todas la propiedades de CommentDTO
 * @typedef {Object} CommentWhithHasLikeDTO
 * @property {boolean} hasLike - Indica si el usuario ha dado "me gusta" al comentario. False por defecto
 */
class CommentWhithHasLikeDTO extends CommentDTO {
    constructor(comment, hasLike = false) {
        super(comment);
        this.hasLike = hasLike;
    }
}

export default CommentWhithHasLikeDTO;