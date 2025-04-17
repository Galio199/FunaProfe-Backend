/**
 * TierListDTO
 *
 * Este DTO representa la agrupación de profesores según su calificación promedio.
 * @typedef {Object} ProfessorTierListDTO
 * @property {ProfessorDTO[]} S - Profesores con rating >= 4.8
 * @property {ProfessorDTO[]} A - Profesores con 4 <= rating < 4.8
 * @property {ProfessorDTO[]} B - Profesores con 3 <= rating < 4
 * @property {ProfessorDTO[]} C - Profesores con 2 <= rating < 3
 * @property {ProfessorDTO[]} D - Profesores con 1 <= rating < 2
 * @property {ProfessorDTO[]} NA - Profesores sin calificación (rating = 0)
 *
 * Cada campo de la clase contiene una lista de profesores (ProfessorDTO) que pertenecen a ese rango.
 */
class ProfessorTierListDTO {
    /**
     * Constructor de la clase ProfessorTierListDTO.
     * Inicializa las propiedades S, A, B, C, D y NA como arreglos vacíos.
     */
    constructor() {
        this.S = [];
        this.A = [];
        this.B = [];
        this.C = [];
        this.D = [];
        this.NA = [];
    }
}

export default ProfessorTierListDTO;