import { Subject } from '../models/index.js';
import { SubjectDTO } from '../DTO/SubjectDTO.js';

class SubjectRepository {

    /**Guardar una materia
     * @param {Object} subject -El objeto con los datos de la materia a guardar
     * @returns {Promise<boolean>} -True si se creó la materia, false si no se creó
    */
    async createSubject(subject) {
        try {
            const newSubject = await Subject.create(subject);
            return !!newSubject;
        } catch (error) {
            throw new Error('Error al crear la materia: ' + error.message);
        }
    }

    /**Eliminar una materia por el id
     * @param {number} id -El id de la materia a eliminar
     * @returns {Promise<boolean>} -true si se eliminó la materia, false si no se encontró
    */
    async deleteSubject(id) {
        try {
            const deleted = await Subject.destroy({ where: { id } });
            return deleted > 0;
        } catch (error) {
            throw new Error('Error al eliminar la materia: ' + error.message);
        }
    }

    /** Obtener una materia por el id
     * @param {number} id -El id de la materia a obtener
     * @returns {Promise<SubjectDTO>} -La materia encontrada
    */
    async getSubject(id) {
        try {
            const subject = await Subject.findOne({ where: { id } });
            return new SubjectDTO(subject.toJSON());
        } catch (error) {
            throw new Error('Error al obtener la materia: ' + error.message);
        }
    }

    /** Listar todas las materias
     * @returns {Promise<SubjectDTO[]>} -Lista de materias
    */
    async getAllSubjects() {
        try {
            const subjects = await Subject.findAll();
            return subjects.map(subject => new SubjectDTO(subject.toJSON()));
        } catch (error) {
            throw new Error('Error al obtener las materias: ' + error.message);
        }
    }
}

export default new SubjectRepository();