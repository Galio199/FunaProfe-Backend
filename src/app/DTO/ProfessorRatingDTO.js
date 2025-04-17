/**
 * ProfessorRatingDTO
 * 
 * Este DTO representa la calificación por parte de un usuario a un profesor existente.
 * @typedef {Object} ProfessorRatingDTO
 * @property {number} professorId - Id del profesor que ha sido calificado
 * @property {number} userId - Id del usuario que ha calificado el profesor
 * @property {number} rating - Calificación que el usuario le ha puesto al profesor
 */
class ProfessorRatingDTO {
  constructor({professorId, userId, rating}={}) {
    this.professorId = professorId;
    this.userId = userId;
    this.rating = rating;
  }
}

export default ProfessorRatingDTO;