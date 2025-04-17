import { ProfessorRating } from "../models/index.js";
import { ProfessorRatingDTO } from "../DTO/ProfessorRatingDTO.js";

class ProfessorRatingRepository {

    /** Guardar una calificación de profesor
     * @param {object} professorRating - Objeto con los datos de calificación-profesor
     * @returns {Promise<boolean>} -True si se creó la calificación-profesor, false si no se creó
    */
    async createProfessorRating(professorRating) {
        try {
            const newProfessorRating = await ProfessorRating.create(professorRating);
            return !!newProfessorRating; // Retornar true si se creó, false si no se creó
        } catch (error) {
            throw new Error('Error al crear la calificación del profesor: ' + error.message);
        }
    }

    /** Eliminar una calificación de profesor por el id del profesor y el id del usuario
     * @param {number} professorId - El id del profesor
     * @param {number} userId - El id del usuario
     * @returns {Promise<boolean>} -true si se eliminó la calificación, false si no se encontró
    */
    async deleteProfessorRating(professorId, userId) {
        try {
            const deleted = await ProfessorRating.destroy({ where: { professorId, userId } });
            return deleted > 0;
        } catch (error) {
            throw new Error('Error al eliminar la calificación del profesor: ' + error.message);
        }
    }

    /** Obtener la calificación que le hizo un usuario a un profesor por el id del profesor y el id del usuario
     * @param {number} professorId - El id del profesor
     * @param {number} userId - El id del usuario
     * @returns {Promise<ProfessorRatingDTO|null>} -La calificación del profesor o null si no existe
    */
    async getProfessorRating(professorId, userId) {
        try {
            const rating = await ProfessorRating.findOne({ where: { professorId, userId } });
            return rating ? new ProfessorRatingDTO(rating.toJSON()) : null;
        } catch (error) {
            throw new Error('Error al obtener la calificación del profesor: ' + error.message);
        }
    }

    /** Actualizar la calificación que le hizo un usuario a un profesor
     * @param {number} professorId - El id del profesor
     * @param {number} userId - El id del usuario
     * @param {object} professorRating - Objeto con la calificación del profesor
     * @returns {Promise<boolean>} -true si se actualizó la calificación, false si no se encontró
    */
    async updateProfessorRating(professorId, userId, professorRating) {
        try {
            // Actualizar la calificación
            const [updated] = await professorRating.update(professorRating, { where: { professorId, userId } });
            return updated > 0;
        } catch (error) {
            throw new Error('Error al actualizar la calificación del profesor: ' + error.message);
        }
    }
}

export default new ProfessorRatingRepository();