/**
 * SubjectDTO
 * 
 * Este DTO representa la información de una materia.
 * @typedef {Object} SubjectDTO
 * @property {number} id - Id de la materia
 * @property {string} name - Nombre de la materia
 */
class SubjectDTO{
    constructor({id, name}={}){
        this.id = id;
        this.name = name;
    }
}

export default SubjectDTO;