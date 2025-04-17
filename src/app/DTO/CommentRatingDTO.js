/**
 * CommentRatingDTO
 * 
 * Este DTO representa la existencia de un like por parte de un usuario a un comentario existente.
 * @typedef {Object} CommentRatingDTO
 * @property {number} commentId - Id del comentario que ha sido calificado
 * @property {number} userId - Id del usuario que ha calificado el comentario
 */

class CommentRatingDTO {
  constructor({commentId, userId}={}) {
    this.commentId = commentId;
    this.userId = userId;
  }
}

export default CommentRatingDTO;