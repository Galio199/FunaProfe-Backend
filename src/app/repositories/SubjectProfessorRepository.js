import { Op } from "sequelize";
import { Professor, SubjectProfessor, Subject } from "../models/index.js";
import { ProfessorDTO } from "../DTO/ProfessorDTO.js";
import { SubjectDTO } from "../DTO/SubjectDTO.js";

class SubjectProfessorRepository {

    /**Guardar una materia-profesor
     * @param {Object} subjectProfessor - Objeto con los datos de la materia-profesor a guardar
     * @returns {Promise<boolean>} -La materia-profesor creada
    */
    async createSubjectProfessor(subjectProfessor) {
        try {
            const newSubjectProfessor = await SubjectProfessor.create(subjectProfessor);
            return !!newSubjectProfessor; // Devuelve true si se creó la materia-profesor, false si no se creó
        } catch (error) {
            throw new Error("Error al guardar la materia-profesor: " + error.message);
        }
    }

    /**Eliminar una materia-profesor por el id de la materia y el id del profesor
     * @param {number} subjectId - ID de la materia
     * @param {number} professorId - ID del profesor
     * @returns {Promise<boolean>} -true si se eliminó la materia-profesor, false si no se encontró
    */
    async deleteSubjectProfessor(subjectId, professorId) {
        try {
            const deleted = await SubjectProfessor.destroy({
                where: {
                    subjectId,
                    professorId,
                },
            });
            return deleted > 0; //Devuelve true si se eliminó al menos un registro
        } catch (error) {
            throw new Error("Error al eliminar la materia-profesor: " + error.message);
        }
    }

    /** Listar los profesores que dictan una materia, buscando por el id de la materia o por el nombre como expresion regular
     * @param {number|string} subject - id de la materia o nombre de la materia
     * @returns {Promise<ProfessorDTO[]>} - Lista de profesores que dictan la materia
    */
    async findProfessorsBySubject(subject) {
        try {
            // Identificar si se paso el nombre de la materia o el id de la materia y ajustar la condicion de busqueda
            const subjectCondition = isNaN(subject)
                ? { name: { [Op.like]: `%${subject}%` } }
                : { id: Number(subject) };
            // Listar las materias-profesores que coincidan con el id de la materia o el nombre como expresion regular
            const subjectProfessors = await SubjectProfessor.findAll({
                attributes: [],
                include: [
                    {
                        model: Subject,
                        as: "subject",
                        attributes: [],
                        where: subjectCondition,
                        required: true,
                    },
                    {
                        model: Professor,
                        as: "professor",
                        attributes: { exclude: ["ratingSum"] },
                    },
                ],
            });

            return subjectProfessors.map(sp => new ProfessorDTO(sp.professor.toJSON()));
        } catch (error) {
            throw new Error("Error al buscar los profesores por materia: " + error.message);
        }
    }

    /** Listar los profesores que dictan una materia y que se encuentran en un rango de calificación
     * @param {number|string} subject - id de la materia o nombre de la materia
     * @param {number} ratingMin - Calificación mínima del profesor (1–5). Inclusiva
     * @param {number} ratingMax - Calificación máxima del profesor (1–5). Excluvisa
     * @returns {Promise<ProfessorDTO[]>} - Lista de profesores que dictan la materia y se encuentran en el rango de calificación
    */
    async findProfessorsBySubjectInRangeOfRating(subject, ratingMin, ratingMax) {
        try {
            // Identificar si se paso el nombre de la materia o el id de la materia
            const subjectCondition = isNaN(subject)
                ? { name: { [Op.like]: `%${subject}%` } }
                : { id: Number(subject) };
            // Listar las materias-profesores que coincidan con el id de la materia o el nombre como expresion regular
            const subjectProfessors = await SubjectProfessor.findAll({
                attributes: [],
                include: [
                    {
                        model: Subject,
                        as: "subject",
                        attributes: [],
                        where: subjectCondition,
                        required: true,
                    },
                    {
                        model: Professor,
                        as: "professor",
                        // Filtrar por calificación de los profesores
                        where: {
                            rating: {
                                [Op.gte]: ratingMin,
                                [Op.lt]: ratingMax,
                            },
                        },
                        required: true,
                        attributes: { exclude: ["ratingSum"] },
                    },
                ],
                // Ordenar por calificación de los profesores
                order: [["professor", "rating", "DESC"]],
            });
            // Retornar los profesores que dictan la materia
            return subjectProfessors.map(sp => new ProfessorDTO(sp.professor.toJSON()));
        } catch (error) {
            throw new Error("Error al buscar los profesores por materia: y calificación " + error.message);
        }
    }

    /** Listar las materias que dicta un profesor en especifico a partir de su id
     * @param {number} professorId - ID del profesor
     * @returns {Promise<SubjectDTO[]>} Lista de materias asociadas al profesor
    */
    async findSubjectsByProfessor(professorId) {
        try {
            const subjectsProfessor = await SubjectProfessor.findAll({
                attributes: [],
                where: { professorId },
                include: [
                    {
                        model: Subject,
                        as: "subject",
                        required: true,
                    },
                ],
            });
            return subjectsProfessor.map(sp => new SubjectDTO(sp.subject.toJSON()));
        } catch (error) {
            throw new Error("Error al buscar las materias por profesor: " + error.message);
        }
    }
}

export default new SubjectProfessorRepository();