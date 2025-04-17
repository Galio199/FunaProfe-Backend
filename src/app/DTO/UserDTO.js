/**
 * UserDTO
 * 
 * Este DTO representa la información visible de un usuario.
 * @typedef {Object} UserDTO
 * @property {number} id - ID del usuario.
 * @property {string} email - Correo electrónico del usuario.
 * @property {boolean} isVerified - Indica si el usuario ha verificado su correo electrónico.
 * @property {boolean} isActive - Indica si el usuario está activo o si ha sido baneado.
 */
class UserDTO {
  constructor({id, email, isVerified, isActive}={}) {
    this.id = id;
    this.email = email;
    this.isVerified = isVerified;
    this.isActive = isActive;
  }
}

export default UserDTO;