import UserRepository from '../repositories/UserRepository.js';
import UserDTO from '../DTO/UserDTO.js';

class UserService {

    /** Crear un nuevo usuario
     * * @param {object} user -El objeto con los datos del usuario a crear
     * @returns {Promise<boolean>} -True si se creó el usuario, false si no se creó
     */
    async createUser(user) {
        try {
            return await UserRepository.createUser(user);
        } catch (error) {
            throw new Error('Error al crear el usuario: ' + error.message);
        }
    }

    /** Eliminar un usuario por el correo (id)
     * @param {string} email -El correo (id) del usuario a eliminar
     * @returns {Promise<boolean>} -true si se eliminó el usuario, false si no se encontró
     */
    async deleteUser(email) {
        try {
            return await UserRepository.deleteUser(email);
        } catch (error) {
            throw new Error('Error al eliminar el usuario: ' + error.message);
        }
    }

    /** Actualizar un usuario
     * @param {string} email -El correo (id) del usuario a actualizar
     * @param {object} user -El objeto con los datos del usuario a actualizar
     * @returns {Promise<boolean>} -true si se actualizó el usuario, false si no se encontró
     */
    async updateUser(email, user) {
        try {
            return await UserRepository.updateUser(email, user);
        } catch (error) {
            throw new Error('Error al actualizar el usuario: ' + error.message);
        }
    }

    /** Validar las credenciales de un usuario
     * @param {string} email -El correo (id) del usuario a validar
     * @param {string} password -La contraseña del usuario a validar
     * @returns {Promise<boolean>} -true si las credenciales son válidas, false si no lo son
    */
    async validateUser(email, password) {
        try {
            return await UserRepository.validateUser(email, password);
        } catch (error) {
            throw new Error('Error al validar el usuario: ' + error.message);
        }
    }

    

}

export default new UserService();