import { Professor } from '../models/index.js';
import { ProfessorDTO } from '../DTOs/ProfesorDTO.js';

class ProfessorRepository {

    /**Guardar un profesor
     * @param {object} professor - Objeto con los datos del profesor a crear
     * @returns {Promise<boolean>} -True si se creó el profesor, false si no se creó
    */
    async createProfessor(professor) {
        try {
            const newProfessor = await Professor.create(professor);
            return !!newProfessor; // Retornar true si se creó, false si no se creó
        } catch (error) {
            throw new Error('Error al crear el profesor: ' + error.message);
        }
    }

    /**Eliminar un profesor por el id
     * @param {number} id - Id del profesor a eliminar
     * @returns {Promise<boolean>} -true si se eliminó el profesor, false si no se encontró
    */
    async deleteProfessor(id) {
        try {
            const deleted = await Professor.destroy({ where: { id } });
            return deleted > 0; //Devuelve true si se eliminó al menos un registro
        } catch (error) {
            throw new Error('Error al eliminar el profesor: ' + error.message);
        }
    }

    /**Actualizar un profesor
     * @param {number} id - Id del profesor a actualizar
     * @param {object} professor - Objeto con los datos del profesor a actualizar
     * @returns {Promise<boolean>} -true si se actualizó el profesor, false si no se encontró
    */
    async updateProfessor(id, professor) {
        try {
            const [updated] = await Professor.update(professor, { where: { id } });
            return updated > 0; //Devuelve true si se actualizó al menos un registro
        } catch (error) {
            throw new Error('Error al actualizar el profesor: ' + error.message);
        }
    }

    /** Actualizar la calificacion de un profesor
     * @param {number} id - Id del profesor a actualizar
     * @param {object} rating - Objeto con el numero de calificaciones y suma de las calificaciones a actualizar
     * @param {number} rating.ratingCount - Nuevo numero de calificaciones del profesor
     * @param {number} rating.ratingSum - Nueva suma de calificaciones del profesor
     * @returns {Promise<boolean>} -true si se actualizó el profesor, false si no se encontró
    */
    async updateRating(id, rating) {
        try {
            const [updated] = await Professor.update(rating, { where: { id } });
            return updated > 0; //Devuelve true si se actualizó al menos un registro
        } catch (error) {
            throw new Error('Error al actualizar la calificacion del profesor: ' + error.message);
        }
    }

    /** Listar todos los profesores
     * @returns {Promise<ProfessorDTO[]>} -Lista de profesores
    */
    async getAllProfessors() {
        try {
            const professors = await Professor.findAll();
            return professors.map(professor => new ProfessorDTO(professor.toJSON()));
        } catch (error) {
            throw new Error('Error al obtener todos los profesores: ' + error.message);
        }
    }

    /** Obtener la lista de profesores a partir del nombre como expresion regular
     * @param {string} name - Nombre del profesor a buscar
     * @returns {Promise<ProfessorDTO[]>} -Lista de profesores que coinciden con el nombre
    */
    async getProfessorsByName(name) {
        try {
            const professors = await Professor.findAll({
                where: {
                    name: { [Op.like]: `%${name}%` },
                },
            });
            return professors.map(professor => new ProfessorDTO(professor.toJSON()));
        } catch (error) {
            throw new Error('Error al obtener los profesores por nombre: ' + error.message);
        }
    }

    /** Obtener un profesor por el id
     * @param {number} id - Id del profesor a buscar
     * @returns {Promise<ProfessorDTO>} -Profesor que coincide con el id
    */
    async getProfessorById(id) {
        try {
            const professor = await Professor.findOne({ where: { id } });
            return new ProfessorDTO(professor.toJSON());
        } catch (error) {
            throw new Error('Error al obtener el profesor por id: ' + error.message);
        }
    }
}

export default new ProfessorRepository();