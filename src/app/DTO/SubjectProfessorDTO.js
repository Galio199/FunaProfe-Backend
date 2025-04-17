/**
 * SubjectProfessorDTO
 * 
 * Este DTO representa la relación entre una materia y un profesor.
 * @typedef {Object} SubjectProfessorDTO
 * @property {number} subjectId - Id de la materia
 * @property {number} professorId - Id del profesor
 */
class SubjectProfessorDTO {
    constructor({ subjectId, professorId} = {}) {
        this.subjectId = subjectId;
        this.professorId = professorId;
    }
}

export default SubjectProfessorDTO;