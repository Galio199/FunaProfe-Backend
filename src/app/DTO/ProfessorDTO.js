/**
 * ProfessorDTO
 * 
 * Este DTO representa la información visible de un profesor.
 * @typedef {Object} ProfessorDTO
 * @property {number} id - Id del profesor
 * @property {string} name - Nombre del profesor
 * @property {number} rating - Calificación promedio del profesor
 * @property {number} ratingCount - Cantidad de calificaciones del profesor
 * @property {number} [ratingSum] - Suma de las calificaciones del profesor (opcional)
 * @property {string} photoPath - Ruta de la foto del profesor
 */
class ProfessorDTO {
    constructor({ id, name, rating, ratingCount, ratingSum = null, photoPath} = {}) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.ratingCount = ratingCount;
        if (ratingSum !== null) this.ratingSum = ratingSum;
        this.photoPath = photoPath;
    }
}

export default ProfessorDTO;