import SubjectRepository from '../repositories/SubjectRepository.js';
import SubjectProfessorRepository from '../repositories/SubjectProfessorRepository.js';
import SubjectDTO from '../DTO/SubjectDTO.js';
import SubjectProfessorDTO from '../DTO/SubjectProfessorDTO.js';
import ProfessorDTO from '../DTO/ProfessorDTO.js';
import ProfessorTierListDTO from '../DTO/ProfessorTierListDTO.js';

class SubjectService {

    /** Listar las materias que dicta un profesor
     * @param {string} professorId -El id del profesor
     * @return {Promise<SubjectProfessorDTO[]>} -Lista de materias (ID y nombre) que dicta el profesor
     */
    async findSubjectsByProfessor(professorId) {
        try {
            return await SubjectProfessorRepository.findSubjectsByProfessor(professorId);
        } catch (error) {
            throw new Error('Error al listar las materias del profesor: ' + error.message);
        }
    }

    /** Listar los profesores que dictan una materia
     * @param {number|string} subject -El id o nombre de la materia como experesión regular
     * @return {Promise<ProfessorDTO[]>} -Lista de profesores que dictan la materia
    */
   async findProfessorsBySubject(subject) {
        try {
            return await SubjectProfessorRepository.findProfessorsBySubject(subject);
        } catch (error) {
            throw new Error('Error al listar los profesores de la materia: ' + error.message);
        }
    }

    /** Listar los profesores que dictan una materia ordenados y agrupados por su calificación para la tier list
     * @param {number|string} subject -El id o nombre de la materia
     * @return {Promise<ProfessorTierListDTO>} -Lista de profesores agrupados por su calificación y ordenados para la tier list
    */
    async findProfessorsBySubjectForTierList(subject) {
        const tierRanges = [
            { key: "S", ratingMin: 4.8, ratingMax: 5.1 }, // Se usa 5.1 para incluir el 5 en el rango
            { key: "A", ratingMin: 4.0, ratingMax: 4.8 },
            { key: "B", ratingMin: 3.0, ratingMax: 4.0 },
            { key: "C", ratingMin: 2.0, ratingMax: 3.0 },
            { key: "D", ratingMin: 1.0, ratingMax: 2.0 },
            { key: "NA", ratingMin: 0.0, ratingMax: 1.0 },
        ];
    
        const tierList = new ProfessorTierListDTO();
    
        for (const { key, ratingMin, ratingMax } of tierRanges) {
            const professors = await SubjectProfessorRepository.findProfessorsBySubjectInRangeOfRating(subject, ratingMin, ratingMax);
            tierList[key] = professors;
        }
    
        return tierList;
    }
}

export default new SubjectService();